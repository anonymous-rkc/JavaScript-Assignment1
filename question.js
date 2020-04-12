var questionBank = [
    {
        id:1,
        question : "Which of the following is correct recurrence for worst case of Binary Search?",
        A  : "T(n) = 2T(n/2) + O(1) and T(1) = T(0) = O(1)",
        B  : "T(n) = T(n-1) + O(1) and T(1) = T(0) = O(1)",
        C  : "T(n) = T(n/2) + O(1) and T(1) = T(0) = O(1)",
        D  : "T(n) = T(n-2) + O(1) and T(1) = T(0) = O(1)",
        answer : "T(n) = T(n/2) + O(1) and T(1) = T(0) = O(1)"
    },
    {
        id:2,
        question : "Which one of the following statements about the function ProcessArray is CORRECT?",
        A  : "It will run into an infinite loop when x is not in listA",
        B  : "It is an implementation of binary search.",
        C  : "It will always find the maximum element in listA.",
        D  : "It will return −1 even when x is present in listA.",
        answer : "It is an implementation of binary search.",
        parentId :1,
        parentAnswerOption: "A"
    },
    {
        id:3,
        question : "The average number of key comparisons done in a successful sequential search in a list of length it is",
        A  : "log n",
        B  : "(n-1)/2",
        C  : "n/2",
        D  : "(n+1)/2",
        answer : "(n+1)/2",
        parentId :1,
        parentAnswerOption: "B"
    },
    {
        id:4,
        question : "Which of the following sorting algorithms can be used to sort a random linked list with minimum time complexity?",
        A  : "Insertion Sort",
        B  : "Quick Sort",
        C  : "Heap Sort",
        D  : "Merge Sort",
        answer : "Merge Sort",
        parentId :1,
        parentAnswerOption: "C"
    },
    {
        id:5,
        question : "In the worst case, the number of comparisons needed to search a singly linked list of length n for a given element is ",
        A  : "log n",
        B  : "(n-1)/2",
        C  : "n/2",
        D  : "n",
        answer : "n",
        parentId :1,
        parentAnswerOption: "D"
    },
    {
        id:6,
        question : "Inside which HTML element do we put the CSS?",
        A  : "stylesheet",
        B  : "src",
        C  : "h1",
        D  : "div",
        answer : "stylesheet",
        parentId :2,
        parentAnswerOption: "A"
    },
    {
        id:7,
        question : "How many different positions can you set for drop cap?",
        A  : "1",
        B  : "2",
        C  : "4",
        D  : "6",
        answer : "2",
        parentId :2,
        parentAnswerOption: "B"
    },
    {
        id:8,
        question : "How many ways you can save a document?",
        A  : "3",
        B  : "4",
        C  : "5",
        D  : "6",
        answer : "3",
        parentId :2,
        parentAnswerOption: "C"
    },
    {
        id:9,
        question : "What is the maximum number of lines you can set for lines to drop box?",
        A  : "3",
        B  : "5",
        C  : "10",
        D  : "15",
        answer : "10",
        parentId :2,
        parentAnswerOption: "D"
    },
    {
        id:10,
        question : "Single spacing in MS-WORD document causes ____ point line spacing?",
        A  : "10",
        B  : "12",
        C  : "14",
        D  : "16",
        answer : "12",
        parentId :3,
        parentAnswerOption: "A"
    },
    {
        id:11,
        question : "What is the default number of lines to drop for drop cap",
        A  : "3",
        B  : "10",
        C  : "15",
        D  : "20",
        answer : "3",
        parentId :3,
        parentAnswerOption: "B"
    },
    {
        id:12,
        question : "What is the maximum number of lines you can set for a drop cap?",
        A  : "3",
        B  : "10",
        C  : "15",
        D  : "20",
        answer : "10",
        parentId :3,
        parentAnswerOption: "C"
    },
    {
        id:13,
        question : "How many columns can you insert in a word document in maximum?",
        A  : "35",
        B  : "45",
        C  : "55",
        D  : "65",
        answer : "45",
        parentId :3,
        parentAnswerOption: "D"
    },
    {
        id:14,
        question : "In a document what is the maximum number of columns that can be inserted in MS Word Table?",
        A  : "35",
        B  : "15",
        C  : "63",
        D  : "65",
        answer : "63",
        parentId :4,
        parentAnswerOption: "A"
    },
    {
        id:15,
        question : "What is the maximum scale percentage available in Scale drop down box?",
        A  : "500",
        B  : "200",
        C  : "100",
        D  : "90",
        answer : "200",
        parentId :4,
        parentAnswerOption: "B"
    },
    {
        id:16,
        question : "What is the maximum font size you can apply for any character",
        A  : "163",
        B  : "1638",
        C  : "16038",
        D  : "None of above",
        answer : "1638",
        parentId :4,
        parentAnswerOption: "C"
    },
    {
        id:17,
        question : "Word, by default, places a tab stop at every _____ mark on the ruler",
        A  : ".25",
        B  : ".5",
        C  : ".75",
        D  : "1",
        answer : ".5",
        parentId :4,
        parentAnswerOption: "D"
    },
    {
        id:18,
        question : "The file type _____ indicates the file is a Word document.",
        A  : ".msw",
        B  : ".wor",
        C  : ".wrd",
        D  : ".doc",
        answer : ".doc",
        parentId :5,
        parentAnswerOption: "A"
    },
    {
        id:19,
        question : "Which of the following button will allow you to add, delete, or change records in your Data Source?",
        A  : "‘Data Source’ button",
        B  : "‘Edit’ button",
        C  : "‘Edit Data Source’ button",
        D  : "‘Data Editing’ button",
        answer : "‘Edit Data Source’ button",
        parentId :5,
        parentAnswerOption: "B"
    },
    {
        id:20,
        question : "How much space in minimum must be provided between columns?",
        A  : "0",
        B  : "0.5",
        C  : "1",
        D  : "1.5",
        answer : "0",
        parentId :5,
        parentAnswerOption: "C"
    },
    {
        id:21,
        question : "By default, your document prints with:",
        A  : "1 inch top and bottom margins",
        B  : "a portrait orientation",
        C  : "1.25 inches left and right margins",
        D  : "all of the above",
        answer : "all of the above",
        parentId :5,
        parentAnswerOption: "D"
    }
];

function diff_minutes(dt2, dt1) 
 {

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  //diff /= 60;
  return Math.abs(Math.round(diff));
  
 }
var choice0,choice1,choice2,choice3;
var k = 0;
var res = "";
var marks = 0;

var startOfTest = new Date();
var start = startOfTest.getHours() + ":" + startOfTest.getMinutes() + ":" + startOfTest.getSeconds();
document.getElementById("question").textContent = questionBank[k].question;
document.getElementById("A").textContent = choice0 = questionBank[k].A;
document.getElementById("B").textContent = choice1 = questionBank[k].B;
document.getElementById("C").textContent = choice2 = questionBank[k].C;
document.getElementById("D").textContent = choice3 = questionBank[k].D;
res = res + "Question:- " +questionBank[k].question + "<br>" + "Answer:- " + questionBank[k].answer +  "<br><br>";

function finalResult(){
    var endOfTest = new Date();
    var end = endOfTest.getHours() + ":" + endOfTest.getMinutes() + ":" + endOfTest.getSeconds();
    var totalTime = diff_minutes(endOfTest,startOfTest);
    var finalRes =  "Start Time:- " + startOfTest + "<br>" + "End Time:- " + endOfTest + "<br>" + "Total Time:- " + totalTime + " seconds "+ "<br> <br>" + res;
    console.log(diff_minutes(endOfTest,startOfTest));
    console.log(end);
    document.getElementById("quiz").innerHTML = finalRes + "";
}

function display(){
    var optionSelected;
    var ele = document.getElementsByName('Options');
    for(let i = 0; i < ele.length; i++) { 
        if(ele[i].checked) 
            optionSelected = ele[i].value;
    }
    var flag  = 0;
    if(optionSelected == "A"){
        console.log(choice0);
    }
    else if(optionSelected == "B"){
        console.log(choice1);
    }
    else if(optionSelected == "C"){
        console.log(choice2);
    } 
    else{
        console.log(choice3);
    }

    k = k+1;
    
    for(let i = 0;i< questionBank.length ;i++){
        if(questionBank[i].parentId == k && questionBank[i].parentAnswerOption == optionSelected){
            document.getElementById("question").textContent = questionBank[i].question;
            document.getElementById("A").textContent = choice0 = questionBank[i].A;
            document.getElementById("B").textContent = choice1 = questionBank[i].B;
            document.getElementById("C").textContent = choice2 = questionBank[i].C;
            document.getElementById("D").textContent = choice3 = questionBank[i].D;
            res = res + "Question:- " +questionBank[i].question + "<br>" + "Answer:- " + questionBank[i].answer +  "<br><br>";
            console.log(res);
            flag = 1;

        }        

    }
    
    if(flag == 0){
        finalResult();
    }

}