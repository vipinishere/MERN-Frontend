import Input from "./Input";

const InputForm = (props)=> { 
    return (
        <>
        <div className="d-flex align-items-center py-4 bg-body-tertiary">
            <div className="form-signin w-100 m-auto">
                <form onSubmit={props.onSubmit} action="/add" method="post">
                    <h1 className="h3 mb-3 fw-normal">{props.title}!</h1>
                    <Input type="text" name="name" value={props.details.name} placeholder="Full Name" onChange={props.onChange} position="top" />
                    <Input type="email" name="email" value={props.details.email} placeholder="Email" onChange={props.onChange} position="middle" />
                    <Input type="number" name="age" value={props.details.age} placeholder="Age" onChange={props.onChange} position="bottom" />
                    <button className="btn btn-primary w-100 py-2 my-2" type="submit">Submit</button>
                    <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2023</p>
                </form>
            </div>
        </div>
        </>
    );
}

export default InputForm;

//<img className="mb-4" src="https://github.com/vipinishere/Let-Connect/blob/main/lc-low-resolution-logo-black-on-transparent-background.png?raw=true" alt="" width="72" height="57" />