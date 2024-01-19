const Button = () => {
    const isLogin = true
    const login = "Login"
  
    return <button>{isLogin ? 'logout' : login}</button>
  }

export default Button