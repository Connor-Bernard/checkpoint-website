import React from 'react';

 export default function Test({ children, className }) {
        return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
    <div style={{ color: 'white', fontSize: 36, fontFamily: 'Roboto Mono', fontWeight: '700', lineHeight: 80, wordWrap: 'break-word' }}>
        Checkpoint
    </div>

    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }}>
        <div style={{ textAlign: 'center', color: '#9E9E9E', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', lineHeight: 28, wordWrap: 'break-word' }}>
            Home
        </div>
        <div style={{width: '100%', height: '100%', paddingLeft: 12, paddingRight: 12, paddingTop: 12, paddingBottom: 12, background: 'linear-gradient(93deg, #FF9898 0%, #8054FF 100%)', borderRadius: 5, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
    <div style={{color: 'white', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>Open the Dashboard</div>
</div>
    </div>
    <div 
      style={{
        textAlign: 'center', 
        color: 'white', 
        fontSize: 64, 
        fontFamily: 'Poppins', 
        fontWeight: '600', 
        lineHeight: 80, 
        wordWrap: 'break-word', 
        width: '545px', 
        height: '160px', 
        position: 'absolute', 
        top: '169px', 
        left: '448px', 
        border: '2px solid white', 
        boxSizing: 'border-box' 
      }}
    >
      Reinventing How<br />Students Learn
    </div>
    </div>
        )
    }
