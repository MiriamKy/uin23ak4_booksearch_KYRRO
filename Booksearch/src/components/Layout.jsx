import React from "react"

export default function({children}) {

    // Å legge noe her kan gjøre det vanskelig å sende ting videre, denne er på en måte paralell mtp funksjonalitet osv

    return(
        <>
        {/* Her inne legger jeg inn html_struktur for det som skal vises på siden uavhengig av søk, bortsett fra input-felt */}
        <main>
            {children}
        </main>
        </>
    )
}