import React from 'react';

 export default function GradientBackground({ children, className }) {
        return (
            <div className={`${className} w-[1446px] h-[616.42px] bg-gradient-to-r from-[#ff9797] to-[#8053ff]`}>
                {children}
            </div>
        );
    }
    

