// 1. a və b ədədimiz var. Əgər a b-dən böyükdürsə, consolda "a b-den boyukdur" yazılsın, bərabərdirsə "beraber", digər halda isə "a b den kicikdir";


// let a;
// let b;

// if(a>b){
//     console.log("A B-den boyukdur")
// }else if(a==b){
//     console.log("A B-ye beraberdir");
// }else{
//     console.log("A B-den kicikdir");
// }





let students=[

    {id:1, name: "Ali", surname: "Alisoy", age:20, grade: 95},
    
    {id:2, name: "Vusala", surname: "Nabiyeva", age:34, grade: 77},
    
    {id:3, name: "Aliya", surname: "Gurbanzade", age:14, grade: 98},
    
    {id:4, name: "Sabir", surname: "Nuruyev", age:15, grade: 54},
    
    {id:5, name: "Mehman", surname: "Heydarov", age:22, grade: 100},
    
    {id:6, name: "Sevana", surname: "Mammadli", age:41, grade: 35},
    
    {id:7, name: "Ilham", surname: "Babayev", age:24, grade: 95},
    
    {id:8, name: "Namiq", surname: "Gulahmedov", age:20, grade: 95},
    
    {id:9, name: "Aygun", surname: "Kazimova", age:24, grade: 100}
    
    ]




    // 2. students arrayində indeksi cüt olan tələbələri yeni arrayə əlavə edib, yeni yaranmış arrayi consolda yazdırın;

    // const cutIndex = [ ]

    // for(let i in students){
    //     if(i%2 == 0){
    //         cutIndex.push(students[i]);
    //     }
    // }
    // console.log(cutIndex);





    // 3.  students arrayində id-i tək olan tələbələrin adlarını consolda yazdırın.

    // const idTek = [ ];

    // for(let i of students){
    //     if(i.id%2 == 1){
    //         idTek.push(i.name);
    //     }
    // }

    // console.log(idTek);





    // 4. students arrayinda yaşı 20+ olan tələbələri yeni arrayə əlavə edib, yeni yaranmış arrayi consolda yazdırın;

    // const yas = [ ];

    // for(let i of students){
    //     if(i.age > 20){
    //         yas.push(i);
    //     }
    // }

    // console.log(yas);




    // 5. students arrayinda id-i cüt və grade-i 90+ olan tələbələri  yeni arrayə əlavə edib, yeni yaranmış arrayi consolda yazdırın;


    // const idGrade = [ ];

    // for(let i of students){
    //     if(i.id%2 ==0){
    //         if(i.grade > 90)
    //         idGrade.push(i)
    //     }
    // }

    // console.log(idGrade);





    // 6.  students arrayinda grade-i 100 və ya 95-ə bərabər olan tələbələrin adlarını yeni arrayə əlavə edib, yeni yaranmış arrayi consolda yazdırın;


    // const grade = [ ];

    // for(let i of students){
    //     if(i.grade==100 || i.grade==95){
    //         grade.push(i);
    //     }
    // }

    // console.log(grade);