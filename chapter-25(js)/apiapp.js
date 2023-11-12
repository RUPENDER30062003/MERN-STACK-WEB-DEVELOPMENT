// XML Example
// <?xml version="1.0" encoding="UTF-8"?>
// - <EmployeeData>
//    <employee id="34594">
//       <firstName> Heather</firstName>
//       <lastName>Banks</lastName>
//       <hireDate>1/19/1998</hireDate>
//       <deptCode>BB001 </deptCode>
//       <salary>72000</salary>
//    </employee>
//   - <employee id="34593">
//       <firstName>Tina</firstName>
//       <lastName> Young </lastName>
//       <hireDate>4/1/2010</hireDate>
//       <deptCode>BB001 </deptCode>
//       <salary>65000</salary>
//    </employee>
// </EmployeeData>

// json
// {
// "string": "Hi",
// "number": 2.5,
// "boolean": true,
// "null": null,
// "object": {} "name": "Kyle", "age": 24 },
// "array": ["Hello", 5, false, null, { "key": "value", "number": 6 }],
// "array0fobjects": [
//    { "name": "Jerry", "age": 28 },
//    { "name": "Sally", "age": 26 }
//  ]
// }

let jsonRes ='{"fact":"Approximately 1/3 of cat owners think their pets are able to read their minds.","Length":78}';
let validRes = JSON.parse(jsonRes);
console.log(validRes.fact);
let student={
  name: "shradha",
  marks: 95,
}
console.log(JSON.stringify(student));

let url = "https://catfact.ninja/fact";
fetch(url)
    .then((res)=>{
        console.log(res);
        // console.log(res.json());
        return res.json();
    })
    .then((data)=>{
        console.log(data.fact);
        return fetch(url);
    })
    .then((res)=>{
        return res.json();
    })
    .then((data2)=>{
        console.log(data2.fact);
    })
    .catch((err)=>{
        console.log("ERROR - ", err);
});
console.log("i am happy");

async function getFacts(){
    try{
      let res1 = await fetch(url);
      let data1 = await res1.json();
      console. log("data1 - ",data1);

      let res2 = await fetch(url);
      let data2 = await res2.json();
      console. log ("data2 - ",data2);
    }catch(e){
      console. log("error : : ", e);
    }
    console.log("good bye");
}

getFacts();