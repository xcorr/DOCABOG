import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import { AngularFireAuth } from "@angular/fire/auth";
import Swal from 'sweetalert2';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firebasedb: AngularFireDatabase, private Auth: AngularFireAuth ) { }

  logged(){
    if(localStorage.getItem('user') != null){
      return true;
    }else{
      return false;
    }
  }

  addUser(username: string, email: string, password: string){

    this.Auth.createUserWithEmailAndPassword( email, password).then((userData)=>{

      const user = this.Auth.currentUser;
      user.then((user)=>{
        user.updateProfile({
          displayName: username,
          photoURL: 'foto aqui'
        }).then((data)=>{
        });

        user.sendEmailVerification().then((returnedData)=> {
          Swal.fire({
            icon: 'success',
            title: 'Register successfully, please verify you email before access!',
            showConfirmButton: false,
            timer: 2000
          });

        }).catch((error)=>{

          console.warn(error);

        })
      });
      
    }).catch((error)=>{
      console.warn(error);

      const errorCodes = error.code;

      switch(errorCodes){
        case 'auth/email-already-in-use':
          Swal.fire({
            icon: 'error',
            title: 'Correo vinculado a otra cuenta',
            showConfirmButton: false,
            timer: 2000
          })
          break;
        case 'auth/weak-password':
          Swal.fire({
            icon: 'error',
            title: 'Contrasena debil',
            showConfirmButton: false,
            timer: 2000
          })
          break;
        case 'auth/invalid-email':
          Swal.fire({
            icon: 'error',
            title: 'Formato de correo electronico incorrecto',
            showConfirmButton: false,
            timer: 2000
          })
          break;
        case 'auth/operation-not-allowed':
          Swal.fire({
            icon: 'error',
            title: 'Registro inhabilitado en estos momentos',
            showConfirmButton: false,
            timer: 2000
          })
          break;
      }
    })

    
  }

  loginUser( email: string, password: string){

    this.Auth.signInWithEmailAndPassword( email, password).then((userData)=>{
      console.warn(userData);
      const isVerified = userData.user.emailVerified;
      const userName = userData.user.displayName;
      if(isVerified){
        Swal.fire({
          icon: 'success',
          title: 'Welcome '+userName,
          showConfirmButton: false,
          timer: 2000
        })
        localStorage.setItem('user', JSON.stringify(userData));
        window.location.reload();
        return 'verified';
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Must verified your email before access',
          showConfirmButton: false,
          timer: 2000
        })
        return 'unverified';
      }

    }).catch((error)=>{
      console.warn(error);

      const errorCodes = error.code;

      switch(errorCodes){
        case 'auth/invalid-email':
          Swal.fire({
            icon: 'error',
            title: 'Formato de correo electronico incorrecto',
            showConfirmButton: false,
            timer: 2000
          })
          break;
        case 'auth/user-disabled':
          Swal.fire({
            icon: 'error',
            title: 'Estimado usuario, su cuanta ha sido inhabilitada por tiempo indefinido',
            showConfirmButton: false,
            timer: 2000
          })
          break;
        case 'auth/user-not-found':
          Swal.fire({
            icon: 'error',
            title: 'No existe una cuenta vinculada con este correo',
            showConfirmButton: false,
            timer: 2000
          })
          break;
        case 'auth/wrong-password':
          Swal.fire({
            icon: 'error',
            title: 'Contrasena incorrecta',
            showConfirmButton: false,
            timer: 2000
          })
          break;
      }
    });

  }

  recoverPassword( email ){
    this.Auth.sendPasswordResetEmail( email ).then(()=>{
      Swal.fire({
        icon: 'success',
        title: 'Email sent successfully!',
        showConfirmButton: false,
        timer: 2000
      })

    }).catch((error)=>{

      Swal.fire({
        icon: 'error',
        title: 'Error occur while sending email!',
        showConfirmButton: false,
        timer: 2000
      })
      
    })
  }

  googleLogin(){

    return this.Auth.signInWithPopup( new auth.GoogleAuthProvider())
    .then((result)=>{
      console.log(result);

      const userName = result.user.displayName;

      Swal.fire({
        icon: 'success',
        title: 'Welcome '+userName,
        showConfirmButton: false,
        timer: 2000
      })
      localStorage.setItem('user', JSON.stringify(result));
      window.location.reload();

    }).catch((err)=>{
      console.log(err);
    });

  }

}
