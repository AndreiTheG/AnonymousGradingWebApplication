import React,{Component} from 'react';
import { Link, Navigate } from 'react-router-dom';
import classes from './RegisterPage.css';
import axios from 'axios'


class RegisterPage extends Component{
    state={}
    handleRegister=(e)=>{
      e.preventDefault()
      const data={
            fullName:this.fullName,
            email:this.email,
            password:this.password,
            year:this.studyYear,
            group:this.groupNr, 
            role:this.role
      }
        axios.post('http://localhost:5001/api/register',data).then(res=>{
            this.setState({registered:true})
            localStorage.setItem('token',res.data.token)
        }).catch(err=>{
            console.log(err);
        })
    }



   render(){ 
    if(this.state.registered){
       return <Navigate to='/start/main-page'/>
    }

    return(
       
        <div className={classes.Login}>
        <div className={classes.All}>
            <div id="Partea Dreapta" className={classes.Dreapta}>
                        <p className={classes.Welcome}>Welcome Back!</p>
                        <p className={classes.DescDreapta}>To keep connected with us please login with your personal info</p>
                      
                        <Link to="/">
                            <button className={classes.ButonDreapta}>
                                SIGN IN
                            </button>
                        </Link>
                    </div>
           
                    <div className={classes.Stanga}>
                      <div id="Partea Stanga" className={classes.St}>
                      
                            <br></br>
                            <div className={classes.Cercuri}>
                            <p>Create Account </p>
                              
                        </div>
                       
                        
                        <br></br>
                        <p className={classes.para}>Use your email for registration:</p>
                        
                        <div className={classes.DrGri}>
                          <input type="text"
                          className={classes.inputReg}
                          placeholder="Name"
                          required="required"
                          onChange={e=>this.fullName=e.target.value}
                          ></input>
                      </div>
                      <div className={classes.DrGri}>
                        <input type="text"
                        className={classes.inputReg}
                        placeholder="Email"
                        required="required"
                        onChange={e=>this.email=e.target.value}
                        ></input>
                      </div>
                      <div className={classes.DrGri}>
                        <input type="password"
                        className={classes.inputReg}
                        placeholder="Password"
                        required="required"
                        onChange={e=>this.password=e.target.value}
                        ></input>
                      </div>
                      <div className={classes.DrGri}>
                        <input type="text"
                        className={classes.inputReg}
                        placeholder="Group Number"
                        required="required"
                        onChange={e=>this.groupNr=e.target.value}
                        ></input>
                      </div>
                      <div className={classes.DrGri}>
                        <input type="number"
                        className={classes.inputReg}
                        placeholder="Study Year"
                        required="required"
                        onChange={e=>this.studyYear=e.target.value}
                        ></input>
                      </div>
                      <div  className={classes.DrGri}>
                        <input type="radio" id="student" name="contact" value="student"  onChange={e=>this.role=e.target.value} />
                        <label style={{display: "inline"}}  htmlFor="student">Student</label>

                        <input type="radio" id="professor" name="contact" value="professor" onChange={e=>this.role=e.target.value} />
                        <label style={{display: "inline"}}  htmlFor="professor">Professor</label>
                       </div> 
                       <Link to="/start/main-page">
                        <button 
                        className={classes.ButonSignUp}
                        onClick={this.handleRegister}>
                            SIGN UP
                     </button>
                     </Link>
                    

                    </div>
            </div>
            </div>
            </div>  
    )
    }
}
export default RegisterPage;