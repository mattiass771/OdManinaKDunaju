export const xAnim = (dir, len, del, expect, dur) => {
    const variantObj = {
        hidden: { 
            x: 0,
            scale: 0.5,
        },
        visible: {
            x: expect || 0,
            scale: 1,
            transition: {
                delay: del || 0,
                duration: dur || 0.7,
                ease: "easeOut",
            }
        }
    }
    switch(dir) {
        case 'left':
            return {...variantObj, hidden: { x: len || 250, scale: 0.5 }}
        case 'right':
            return {...variantObj, hidden: { x: len || -250, scale: 0.5 }}
        default: 
            return {...variantObj}
    } 
    
}