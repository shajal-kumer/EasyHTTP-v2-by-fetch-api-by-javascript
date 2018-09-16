
/**
 * EasyHTTP Library
 * Library for making HTTP request
 * 
 * @version 2.0.0
 * @author Brad traversy and Shajal kumer
 * @license MIT
 * 
**/

class EasyHTTP {
    
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                    .then(data => resolve(data))
            
        });
    }


    // Make a HTTP POST Request
    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
                })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        }); 
    }
    // Make a HTTP PUT Request
    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
                })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        }); 
    }

    //  Make a HTTP Delete Request
    delete(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
                })
            .then(res => res.json())
            .then(() => resolve('User Deleted...'))
            .catch(err => reject(err));
        }); 
    }
}