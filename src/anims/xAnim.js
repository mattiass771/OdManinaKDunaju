export const xAnim = (dir, len, del) => {
    const variantObj = {
        hidden: { 
            x: 0,
        },
        visible: {
            x: 0,
            transition: {
                delay: del || 0,
                duration: 0.7,
                ease: "easeOut",
            }
        }
    }
    switch(dir) {
        case 'left':
            return {...variantObj, hidden: { x: len || 250 }}
        case 'right':
            return {...variantObj, hidden: { x: len || -250 }}
        default: 
            return {...variantObj}
    } 
    
}