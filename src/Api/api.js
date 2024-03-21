export const get = async (url, authFlag) => {
    try {
        let headers = {};
        headers["content-type"] = "application/json";
        if (authFlag) {
            headers["jwt"] = JSON.parse(localStorage.getItem('hrms_token')).token;
        }
        const response = await fetch(url, {
            method: "GET",
            headers
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        // localStorage.removeItem('hrms_token');
        // localStorage.removeItem('hrms_user');
        // window.location.href = "/login";
    }
};

export const post = async (url, body, authFlag) => {
    try {
        let headers = {};
        headers["content-type"] = "application/json";
        if (authFlag) {
            headers["jwt"] = JSON.parse(localStorage.getItem('hrms_token')).token;
        }

        const response = await fetch(url, {
            method: "POST",
            headers,
            body: JSON.stringify(body)
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        // localStorage.removeItem('hrms_token');
        // localStorage.removeItem('hrms_user');
        // window.location.href = "/login";
    }
};

// export const postForm = async (url, data, authFlag) => {

     
//      console.log("data ",data);
//     const formData = new FormData();
//     formData.append('monthSalary', data.monthSalary);
//     formData.append('adharCard', data.adharCard);
//     formData.append('cancelCheque', data.cancelCheque);
//     formData.append('pancard', data.pancard);
//     formData.append('educationCert', data.educationCert);
//     formData.append('prevOrgOffer', data.prevOrgOffer);
//     try {
//         let headers = {};
//         if (authFlag) {
//             headers["jwt"] = JSON.parse(localStorage.getItem('hrms_token')).token;
//         }

//         const response = await fetch(url, {
//             method: "POST",
//             headers,
//             'Content-Type': 'multipart/form-data',
//             body: formData 
//         });

//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.log(error);
//         // Handle error as needed
//     }
// };


export const put = async (url, body, authFlag) => {
    try {
        let headers = {};
        headers["content-type"] = "application/json";
        if (authFlag) {
            headers["jwt"] = JSON.parse(localStorage.getItem('hrms_token')).token;
        }

        const response = await fetch(url, {
            method: "PUT",
            headers,
            body: JSON.stringify(body)
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        // localStorage.removeItem('hrms_token');
        // localStorage.removeItem('hrms_user');
        // window.location.href = "/login";
    }
};

export const deleteReq = async (url, authFlag) => {
    try {
        let headers = {};
        headers["content-type"] = "application/json";
        if (authFlag) {
            headers["jwt"] = JSON.parse(localStorage.getItem('hrms_token')).token;
        }

        const response = await fetch(url, {
            method: "DELETE",
            headers
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        localStorage.removeItem('hrms_token');
        localStorage.removeItem('hrms_user');
        window.location.href = "/login";
    }
};
