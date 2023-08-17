import "./Form.scss";

const Form = () => {
  return (
    <div className="container form_container">
      
      <h1>Stand for Wildlife</h1>
      <p>Join a community of over one million people helping protect the wildlife and places we love.</p>

      <form>
        <input type="email" placeholder="Email address" className="email key" />
        <input type="password" placeholder="Password" className="pass key" />
        <input type="password" placeholder="Re-type password" className="re_pass key" />

        <div className="notified">
            <input type="checkbox" id="check" />
            <label htmlFor="check">Get notified about critical issues and ways you can help!</label>
        </div>

        <input type="submit" value="Save the Wildlife" className="submit"/>
      </form>

    </div>
  )
}

export default Form
