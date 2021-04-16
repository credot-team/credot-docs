const App = () => {
  const [account, setAccount] = React.useState('');
  const [password, setPassword] = React.useState('');

  React.useEffect(() => {
    if (location.pathname !== '/') {
      location.pathname = '/';
    }
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex flex-row items-center space-x-5 my-5">
        <i className="fa fa-fire text-white" />
        <div className="text-white font-bold">Login</div>
      </div>

      <div className="h-5" />

      <div className="flex flex-row items-center space-x-5">
        <input value={account} onChange={(e) => setAccount(e.target.value)} />

        <input value={password} onChange={(e) => setPassword(e.target.value)} />

        <button
          className="px-5 py-2 bg-red-600 text-white rounded"
          onClick={() => {
            fetch('/api/login', {
              method: 'POST',
              body: JSON.stringify({ account, password }),
              headers: new Headers({
                'Content-Type': 'application/json',
              }),
            })
              .then((res) => location.reload())
              .catch((error) => alert(error));
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
