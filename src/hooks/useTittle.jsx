import { useEffect } from "react"

const useTittle = (titulo) => {

    useEffect(() => {
      document.title = `Desafío Nº 17 - Mauricio Molina - ${titulo}`
    }, [])
    
}

export default useTittle