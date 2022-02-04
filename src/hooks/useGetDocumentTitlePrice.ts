import { useEffect } from 'react'
import { useOsUsdtPrice } from 'hooks/useUSDTPrice'

const useGetDocumentTitlePrice = () => {
  const osPriceUsdt = useOsUsdtPrice()
  useEffect(() => {
    const osPriceUsdtString = osPriceUsdt ? osPriceUsdt.toFixed(2) : ''
    document.title = `Oasis Swap - ${osPriceUsdtString}`
  }, [osPriceUsdt])
}
export default useGetDocumentTitlePrice
