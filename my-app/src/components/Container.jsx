import Main from './Main/Main';
import Bar from './Bar/Bar';

function Container (){
    return(
        <div className='wrapper'>
            <div className='container'>
                <Main />
                <Bar />
            </div>
        </div>
        
    )
};

export default Container;