import image1 from '/images/event-1.png'
import image2 from '/images/event-1.png'
import image3 from '/images/event-1.png'
import image4 from '/images/event-1.png'

export const images: string[] = [image1, image2, image3, image4]

const imageByIndex = (index: number): string => images[index % images.length]

export default imageByIndex
