import HeartSVG from './HeartSVG';
const colors = [
    '#B8E3F5',
    '#F5B8E4',
    '#B8F5B9',
    '#F5F3B8',
    '#E3B8F5',
    '#FFFCF2'
];
function CandyColoredHeart (props) {
     const randomCol = colors[Math.floor(Math.random() * colors.length)];
     return (
     <div className = 'heart'>
        <div className ='heart-img'>
            <HeartSVG col={randomCol} />
            </div>
            <p className= 'heart-message'> {props.msg}</p>
        
    </div>
     )
}
    export default CandyColoredHeart;