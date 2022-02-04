import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { useTranslation } from 'contexts/Localization'
import { multicallv2 } from 'utils/multicall'
import profileABI from 'config/abi/oasisswapProfile.json'
import { getOasisswapProfileAddress } from 'utils/addressHelpers'
import useToast from 'hooks/useToast'

const useGetProfileCosts = () => {
  const { t } = useTranslation()
  const [isLoading, setIsLoading] = useState(true)
  const [costs, setCosts] = useState({
    numberOsToReactivate: ethers.BigNumber.from(0),
    numberOsToRegister: ethers.BigNumber.from(0),
    numberOsToUpdate: ethers.BigNumber.from(0),
  })
  const { toastError } = useToast()

  useEffect(() => {
    const fetchCosts = async () => {
      try {
        const calls = ['numberOsToReactivate', 'numberOsToRegister', 'numberOsToUpdate'].map((method) => ({
          address: getOasisswapProfileAddress(),
          name: method,
        }))
        const [[numberOsToReactivate], [numberOsToRegister], [numberOsToUpdate]] = await multicallv2<
          [[ethers.BigNumber], [ethers.BigNumber], [ethers.BigNumber]]
        >(profileABI, calls)

        setCosts({
          numberOsToReactivate,
          numberOsToRegister,
          numberOsToUpdate,
        })
        setIsLoading(false)
      } catch (error) {
        toastError(t('Error'), t('Could not retrieve OS costs for profile'))
      }
    }

    fetchCosts()
  }, [setCosts, toastError, t])

  return { costs, isLoading }
}

export default useGetProfileCosts
