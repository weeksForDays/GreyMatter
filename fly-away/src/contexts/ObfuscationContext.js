import React, {createContext, useEffect, useState, useContext} from "react";

const obfuscationContext = createContext();

export function ObfuscationContextProvider({children}) {

	function toggleObfuscated() {
		setObfuscated((!obfuscated));
	}

	const [obfuscated, setObfuscated] = useState();

	return (
		<obfuscationContext.Provider value={{obfuscated, toggleObfuscated}}>
			{children}
		</obfuscationContext.Provider>
	)

}

export function useObfuscation() {
	return useContext(obfuscationContext);
}