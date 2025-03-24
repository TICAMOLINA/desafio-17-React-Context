import { useEffect } from "react"

const useTittle = (titulo) => {

    useEffect(() => {
      document.title = `Desafío Nº 16 - Mauricio Molina - ${titulo}`
    }, [])
    
}

export default useTittle