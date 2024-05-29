const studentData = {
    "Khabib Shrestha": {
        Address: {
        Permanent: "Dagestan, Russia",
        Temporary: "Mid-Baneshwor, Kathmandu"
        },
        phoneNumber: {
            Mobile: 9860504398,
            Home:  5576844
        },
        Email: "khabib@gmail.com"
    },
    "Manny Poudel": {
        Address: {
            Permanent: "General Santos, Philippines"
        },
        phoneNumber: {
            Mobile: 9801244554
        },
        Email: "manny@yahoo.com"
    },
    "Connor Maharjan": {
        Address: {
            Permanent: "null",
            Temporary: "Khasibazar, Kathmandu"
        },
        phoneNumber: {
            Home: 5564990
        },
        Email: "connor@hotmail.com"
    },
    "Buakaw Rajbanshi": {
        Address: {
          Permanent: "Pattaya, Thailand",
          Temporary: "Pepsicola, Bhaktapur"
        },
        phoneNumber: {
          Mobile: "9841546433",
          Home: "4428767"
        },
        email: "r.buakaw@gmai.com"
      },
      "Paddy Pahadi": {
        Address: {
          Temporary: "Mid-Thimi, Bhaktapur"
        },
        phoneNumber: {
          Home: "4456477"
        },
        Email: "paddy@protonmail.ch"
      }



}

console.log("Khabib's home phone number is: " , studentData["Khabib Shrestha"].phoneNumber.Home);
console.log("Manny's Permanent address is: ", studentData["Manny Poudel"].Address.Permanent);
console.log("Connor's temporary address is: ", studentData["Connor Maharjan"].Address.Temporary);
console.log("Buakaw's Temporary address is: ", studentData["Buakaw Rajbanshi"].Address.Temporary);
console.log("Buakaw's email is: ", studentData["Buakaw Rajbanshi"].email);
console.log("Paddy's permanent address is: ", studentData["Paddy Pahadi"].Address.Permanent);
console.log("Connor's Permanent address is: ", studentData["Connor Maharjan"].Address.Permanent);
