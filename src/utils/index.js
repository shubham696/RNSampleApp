import {Dimensions} from 'react-native';

export const {width, height} = Dimensions.get('window')
const guidlineWidth = 480;
const guidelineHeight = 320;

export const setWidth = (size) => (width/guidlineWidth)*size
export const setHeight = (size) => (height/guidelineHeight)*size
export const setFontScale = (size) => {
    const ratio = size/guidlineWidth;
    const newFontSize = Math.round(width*ratio)
    return newFontSize;
}
