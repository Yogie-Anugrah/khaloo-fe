import React from 'react';
import Typography from '@/components/Typography';

const AdminNewPartnerLayout: React.FC<{children: React.ReactNode}> = ({ children }) => {
    return (
        <main className='flex min-h-screen flex-wrap items-center gap-10 p-24'>
            <Typography.Title level={1}> Daftar Partner </Typography.Title>
            {children}
        </main>
    )    
}

export default AdminNewPartnerLayout;
