import { useEffect } from "react";

function PromiseCallback() {
  const exampleForCallbackFunction = () => {
    const users = [
      { id: 1, name: "Parth" },
      { id: 2, name: "Bibin" },
    ];
    const getUser = () => {
      console.log("inside getUser function ---users data", users);
    };

    const createData = (user, callback) => {
      users.push(user);
      callback();
      console.warn("inside createData function", users);
    };

    createData({ id: 3, name: "Vishal" }, getUser); //here getData is send as a callback function, so that it can be called when needed.
  };

  const exampleForPromise = () => {
    const chocolates = [
      { id: 1, name: "cadbury" },
      { id: 2, name: "silk" },
    ];
    const getChocolates = () => {
      let chocolateArr = "";
      chocolates.forEach((chocolate) => {
        chocolateArr += `<li>${chocolate?.name}</li>`;
      });
      // eslint-disable-next-line no-return-assign
      return (document.body.innerHTML = chocolateArr);
    };

    const createData = (chocolate) => {
      return new Promise((resolve, reject) => {
        if (chocolate) {
          chocolates.push(chocolate);
          resolve();
        } else {
          // eslint-disable-next-line prefer-promise-reject-errors
          reject("There is no more chocolate added");
        }
      });
    };

    createData({ id: 3, name: "Poppins" })
      .then(getChocolates)
      .catch((error) => console.warn(error));
  };
  const candies = [
    { id: 1, name: "mangoDolly" },
    { id: 2, name: "chocobar" },
  ];
  const getCandies = () => {
    let chocolateArr = "";
    candies.forEach((chocolate) => {
      chocolateArr += `<li>${chocolate?.name}</li>`;
    });
    // eslint-disable-next-line no-return-assign
    return (document.body.innerHTML = chocolateArr);
  };

  const createData = (chocolate) => {
    return new Promise((resolve, reject) => {
      if (chocolate) {
        candies.push(chocolate);
        resolve();
      } else {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject("There is no more chocolate added");
      }
    });
  };

  const samplefunction = () => {
    // parent promise
    const promise = new Promise((resolve, reject) => {
      resolve("Hello JavaScript");
    });

    promise
      .then((result1) => {
        // here Hello JavaScript promise will run
        console.log("---85", result1);
        // child promise
        return new Promise((resolve, reject) => {
          resolve("GFG is awesome");
        });
      })
      .then((result2) => {
        // this then is used to capture the new child promise - GFG is awesome promise
        console.log("---91", result2);
      });
  };
  const createAsyncFunction = async () => {
    // async makes a function return a Promise
    //await makes a function wait for a Promise
    await createData({ id: 3, name: "julubar" });
    getCandies();
  };
  useEffect(() => {
    // exampleForCallbackFunction();
    // exampleForPromise();
    // createAsyncFunction();
    samplefunction();
  }, []);

  return (
    <div>
      <div>
        <span> This is Promise Callback Async Await </span>{" "}
      </div>{" "}
    </div>
  );
}

export default PromiseCallback;
