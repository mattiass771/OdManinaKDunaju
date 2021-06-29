export const yAnim = (dir, len, del, expect, dur) => {
    const variantObj = {
        hidden: { 
            y: 0,
        },
        visible: {
            y: expect || 0,
            transition: {
                delay: del || 0,
                duration: dur || 0.7,
                ease: "easeOut",
            }
        }
    }
    switch(dir) {
        case 'up':
            return {...variantObj, hidden: { y: len || 250 }}
        case 'down':
            return {...variantObj, hidden: { y: len || -250 }}
        default: 
            return {...variantObj}
    } 
    
}