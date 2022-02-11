// ES6 Modules or TypeScript
import Swal from 'sweetalert2'


export const alterSuccess = (message: string) => {
    return Swal.fire({
        position: 'center',
        icon: 'success',
        title: "Success",
        text: message,
        showConfirmButton: false,
        timer: 2000
    })
}


export const alterFail = (message: string) => {
    return Swal.fire({
        position: 'center',
        icon: 'error',
        title: "Error",
        text: message,
        showConfirmButton: false,
        timer: 2000
    })
}