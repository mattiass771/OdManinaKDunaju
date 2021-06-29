export const xAnim = (dir, len, del, expect, dur) => {
    const variantObj = {
        hidden: { 
            x: 0,
        },
        visible: {
            x: expect || 0,
            transition: {
                delay: del || 0,
                duration: dur || 0.7,
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