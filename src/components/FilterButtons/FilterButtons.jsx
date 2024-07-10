import './filterButtons.css';

const FilterButtons = ({setStatus, status}) => {
    return (
        <div className='filterButtons'>
                <button onClick={ () => {
                    setStatus('all')
                }

                }>all</button>
                <button onClick={ () => {
                    setStatus('active')
                }

                }>active</button>
                <button onClick={ () => {
                    setStatus('completed')
                }

                }>completed</button>
                <button onClick={ () => {
                    setStatus('important')
                }

                }>important</button>
                <button onClick={ () => {
                    setStatus('trash')
                }

                }>trash</button>
        </div>
    );
}

export default FilterButtons;
