### Exercise: Level 1

1. Declare an _empty_ array;
  ```js
    let arr = [];
  ```

2. Declare an array with more than 5 number of elements
  ```js
    arr = [1,2.3,'Gaoba',true,null];
  ```

3. Find the length of your array
  ```js
    console.log(arr.length);
  ```

4. Get the first item, the middle item and the last item of the array
  ```js
    console.log(arr[0]);                //first item
    let middleItem = Math.floor((arr.length)/2);
    console.log(arr[middleItem]);   // middle item
    console.log(arr[arr.length-1]);    // last item
  ```

5. Declare an array called _mixedDataTypes_, put different data types in the array and find the length of the array. The array size should  be greater than 5
  ```js
    let mixedDataTypes = [1,2.3,'Gaoba',true,null];
  ```

6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
  ```js
    arr = [1,2.3,'Gaoba',true,null];
  ```

7. Print the array using _console.log()_
  ```js
    console.log(itCompanies);
  ```

8. Print the number of companies in the array
  ```js
    console.log(itCompanies.length);
  ```

9. Print the first company, middle and last company
  ```js
    console.log(itCompanies[0]);                //first item
    let middleCompany = Math.floor((itCompanies.length)/2);
    console.log(itCompanies[middleCompany]);   // middle item
    console.log(itCompanies[itCompanies.length-1]);    // last item
  ```
  
10. Print out each company
  ```js
    for(let i = 0 ; i < itCompanies.length; i++){
       console.log(itCompanies[i]);
     }
  ```
  
11. Change each company name  to uppercase one by one and print them out
  ```js
    for(let i = 0 ; i < itCompanies.length; i++){
       console.log(itCompanies[i].toUpperCase());
     }
  ```
  
12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
  ```js
    console.log(`${itCompanies} are big IT companies.`);
  ```
  
13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is _not found_
  ```js
    if(itCompanies.includes('Yandex')){
       console.log('');
    }
    else{
       console.log('company is not found');
    }
  ```
  
14. Filter out companies which have more than one 'o' without the filter method
  ```js
    let filterd = [];
     itCompanies.filter (company => {
       if(company.match(/o/gi) ) {
         filterd.push(company)
       }
     })
     console.log(itCompanies);
     console.log(filterd);
  ```
  ```js
    //here we filterd all companies which have more than one o;
    let filterd = [];
    itCompanies.map(filterdCompany => {
      if(filterdCompany.match(/o/gi) && filterdCompany.match(/o/gi).length > 1) {
        filterd.push(filterdCompany)
      }
    })
    console.log(itCompanies);
    console.log(filterd);
  ```
  
15. Sort the array using _sort()_ method
  ```js
    console.log(itCompanies.sort());
  ```
  
16. Reverse the array using _reverse()_ method
  ```js
    console.log(itCompanies.reverse());
  ```
  
17. Slice out the first 3 companies from the array
  ```js
    console.log(itCompanies.slice(0,3));
  ```
  
18. Slice out the last 3 companies from the array
  ```js
    console.log(itCompanies.slice(-3));
  ```
  
19. Slice out the middle IT company or companies from the array
  ```js
    let middleItCompany = Math.floor(itCompanies.length / 2);
    console.log(itCompanies[middleItCompany]);
  ```
  ```js
    // Slice out the middle company using slice method
      console.log(itCompanies.slice(Math.floor(itCompanies.length / 2), 1));
  ```

20. Remove the first IT company from the array
  ```js
    console.log(itCompanies.shift());
  ```
  
21. Remove the middle IT company or companies from the array
  ```js
     console.log(itCompanies.slice(Math.floor(itCompanies.length / 2), 1));
  ```
  
22. Remove the last IT company from the array
  ```js
    console.log(itCompanies.pop());
  ```
  
23. Remove all IT companies
  ```js
    let lengthArray = itCompanies.length ;
    for(let i = 0; i < lengthArray; i++){
      itCompanies.pop();
      console.log(itCompanies);
    }
  ```

### Exercise: Level 2

1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
1. First remove all the punctuations and change the string to array and count the number of words in the array
    ```sh
    ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
  
    13
    ```

    ```js
    let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
     let words = text.replace(/[\.,]/gi, '').split(' ');
     console.log(words);
     console.log(words.length);
    ```

1. In the following shopping cart add, remove, edit items

    ```js
    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
    ```

   - add 'Meat' in the beginning of your shopping cart if it has not been already added
   
   shoppingCart.unshift("Meat");
   - add Sugar at the end of you shopping cart if it has not been already added
   - remove 'Honey' if you are allergic to honey
   - modify Tea to 'Green Tea'
1. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
1. In the webTechs array check if Sass exists in the array  and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
1. Concatenate the following two variables and store it in a fullStack variable.

    ```js
    const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
    const backEnd = ['Node','Express', 'MongoDB']
  
    console.log(fullStack)
    ```

    ```sh
    ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
    ```

### Exercise: Level 3

1. The following is an array of 10 students ages:

    ```js
    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    ```

    - Sort the array and find the min and max age
    - Find the median age(one middle item or two middle items divided by two)
    - Find the average age(all items divided by number of items)
    - Find the range of the ages(max minus min)
    - Compare the value of (min - average) and (max - average), use _abs()_ method
1.Slice the first ten countries from the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)
1. Find the middle country(ies) in the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)
2. Divide the countries array into two equal arrays if it is even.  If countries array is not even , one more country for the first half.

