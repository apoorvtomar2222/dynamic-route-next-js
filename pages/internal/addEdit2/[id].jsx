import { useRouter } from 'next/router'
import React from 'react'

function AddEdit2() {
    const router = useRouter();
    const { id } = router.query;
    const finalId = id !== 'add' ? id : null;
    return (
        <div>
            <h1>
                {finalId != null ? 'Edit' : 'Add'} Page
            </h1>

        </div>
    )
}

export default AddEdit2