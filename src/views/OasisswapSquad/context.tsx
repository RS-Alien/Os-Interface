import React, { Dispatch, SetStateAction } from 'react'

export const OasisswapSquadContext = React.createContext<{
  isUserEnabled: boolean
  setIsUserEnabled: Dispatch<SetStateAction<boolean>> | null
}>({
  isUserEnabled: false,
  setIsUserEnabled: null,
})
