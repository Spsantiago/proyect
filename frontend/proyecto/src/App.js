import './App.css';

function App() {
    return (
        <div class="d-flex justify-content-center">
            <div
                class="h-100 p-5 text-bg-dark rounded-3 col-4 mt-4"
                style={{ width: '480px' }}
            >
                <h2>
                    <i
                        class="fa-solid fa-earth-americas colorearicono"
                        style={{ fontSize: '2rem' }}
                    ></i>{' '}
                    Change the background
                </h2>

                <p>
                    Swap the background-color utility and add a `.text-*` color
                    utility to mix up the jumbotron look. Then, mix and match
                    with additional component themes and more.
                </p>
                <button class="btn btn-outline-danger" type="button">
                    Example button
                </button>
            </div>
        </div>
    );
}

export default App;
