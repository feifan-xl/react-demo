import React from 'react'

export const UserContext = React.createContext({themeColor: "pink"})

export const UserProvider = UserContext.Provider

export const UserConsumer = UserContext.Consumer
