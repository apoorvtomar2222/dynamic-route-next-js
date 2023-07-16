import React from 'react'
import { useRouter } from 'next/router'


function DynamicRoute() {

    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            DynamicRoute{id}
        </div>
    )
}

export default DynamicRoute