//수업생성url
var subjectinfourl = "https://docs.google.com/spreadsheets/d/1-7VCVhL9Nb1Z1v_logA5PoIncvf2__9fZskl1kkeLx4/edit"
//재적url
var registrationurl = "https://docs.google.com/spreadsheets/d/1uRvT0MRaXXgkJYFfcx_zTd1PlrVFWlXrkptpljs02MU/edit"
//수업배정url
var studenttosubjectinfourl = "https://docs.google.com/spreadsheets/d/1_-CPveXIYuEKBmvvbdoqsOz3qsuqo_9ZDJSnZ9PRUwY/edit"
//성적데이터url
var gradeinfourl = "https://docs.google.com/spreadsheets/d/1EG5aRGLXrol8V4KPYSc2Uu2ihgyQ-HVzjIq-1LKrTuM/edit"
//기본정보url
var basicinfourl = "https://docs.google.com/spreadsheets/d/1lyYLPwqzZa7pc4u1sKgiTEF9Xb_mxtgQL7vS5IboOTQ/edit#gid"
//고등출석정보url
var attendancehighurl = "https://docs.google.com/spreadsheets/d/12P1Grmq5K04sf9U8ePEbY1KjGnEu2KiQpXWuNuaIeEw/edit"
//행동특성url
var hrteacheropinioninfourl = "https://docs.google.com/spreadsheets/d/1hKFoA6OrG8i3Ny2DY54Boia0Tpp-__WNiFQBUwTYYM4/edit"
//자기성찰url
var studentreflectioninfourl = "https://docs.google.com/spreadsheets/d/1LmNeutsU68t9UYTYO0adfT_13_JV4msU1-vocrSTSp4/edit"
//신체능력url
var physicalrecordinfourl = "https://docs.google.com/spreadsheets/d/1BcjoOp9qFhe6b4rjL_FIPffSZnHGzMom3fXEDCuZMw4/edit"
//수상url
var awardinfourl = "https://docs.google.com/spreadsheets/d/1D8If8olr7Q7RPz8nMAR4M9ArLfHugwXNthtT3ohzvUQ/edit"
//봉사활동url
var voluntaryworkinfourl = "https://docs.google.com/spreadsheets/d/155mplA8JKt_Udc-9X37wUD5EA-P6m51GSzBj2pV1Wg0/edit"
//자율활동url
var voluntaryactivityinfourl = "https://docs.google.com/spreadsheets/d/14nETKLD0wAYweQ0QOQns4MbnA7utmZhp5r1am_NI6S8/edit"
//동아리활동url
var clubinfourl = "https://docs.google.com/spreadsheets/d/1IaiC9gFieBz2dmHFN4wymqfjfmLLfTxoyn9nnVfgIK8/edit"
//진로활동url
var careerorientedinfourl = "https://docs.google.com/spreadsheets/d/1uOYTT8BiPHgqMkWvLpDtTxp6Qd3bftBYHSeGP6j2QWo/edit"
//독서활동url
var readinginfourl = "https://docs.google.com/spreadsheets/d/1YBUl2hHwJlEdrsJIHpwT64U1q3JSyKcC5WhO-rzKe7c/edit"
//상담기록url
var counselinginfourl = "https://docs.google.com/spreadsheets/d/1Etpn_J3bbF-eCuXjCWWOcKn-TgR8t-sRJcp5iulRndo/edit"

function getInitialBasicData(){
  const ss = SpreadsheetApp.openByUrl(basicinfourl);
  const ws = ss.getSheetByName("Set_1_Basic Info");
  return ws.getRange(2,1,ws.getLastRow()-1,2).getValues();
}

function setAllData(sID, schoolStage){

  var count = 0;
  var maxTries = 3;
  while(true){
    try{

      const middleSchool = ["6","7","8","9"];
      const highSchool = ["10","11","12"];

      if(schoolStage === "중등"){

        const ss1 = SpreadsheetApp.openByUrl(registrationurl);
        const ws1 = ss1.getSheetByName("Set_1_Registration");
        const registrationData = ws1.getRange(2,1,ws1.getLastRow()-1,14).getValues();
        const filteredRegistrationData = registrationData.filter(function(r){
          return r[2] === sID;
        }).filter(function(r){
          return r[5].toString() === middleSchool[0] || r[5].toString() === middleSchool[1] || r[5].toString() === middleSchool[2] || r[5].toString() === middleSchool[3];
        });  

        const ss2 = SpreadsheetApp.openByUrl(basicinfourl);
        const ws2 = ss2.getSheetByName("Set_1_Basic Info");
        const basicData = ws2.getRange(2,1,ws2.getLastRow()-1,24).getValues();  
        const filteredBasicData = basicData.filter(function(r){
          return r[0] === sID;
        });  

        const ss3 = SpreadsheetApp.openByUrl(attendanceinfourl);
        const ws3 = ss3.getSheetByName("Attendance");
        const attendanceData = ws3.getRange(2,2,ws3.getLastRow()-1,3).getValues();
        const filteredAttendanceData = attendanceData.filter(function(r){
          return r[0] === sID && r[2] !== "";
        });     

        const ss4 = SpreadsheetApp.openByUrl(awardinfourl);
        const ws4 = ss4.getSheetByName("award");
        const awardData = ws4.getRange(2,2,ws4.getLastRow()-1,12).getValues();    
        const filteredAwardData = awardData.filter(function(r){
          return r[1] === sID;
        }).filter(function(r){
          return r[2].toString() === middleSchool[0] || r[2].toString() === middleSchool[1] || r[2].toString() === middleSchool[2] || r[2].toString() === middleSchool[3];
        });

        const ss5 = SpreadsheetApp.openByUrl(voluntaryactivityinfourl);
        const ws5 = ss5.getSheetByName("voluntary_activities");
        const voluntaryActivityData = ws5.getRange(2,2,ws5.getLastRow()-1,9).getValues();    
        const filteredVoluntaryActivityData = voluntaryActivityData.filter(function(r){
          return r[1] === sID;
        }).filter(function(r){
          return r[2].toString() === middleSchool[0] || r[2].toString() === middleSchool[1] || r[2].toString() === middleSchool[2] || r[2].toString() === middleSchool[3];
        });

        const ss6 = SpreadsheetApp.openByUrl(clubinfourl);
        const ws6 = ss6.getSheetByName("club_student_comment");
        const clubData = ws6.getRange(2,1,ws6.getLastRow()-1,11).getValues();
        const filteredClubData = clubData.filter(function(r){
          return r[2] === sID;
        }).filter(function(r){
          return r[3].toString() === middleSchool[0] || r[3].toString() === middleSchool[1] || r[3].toString() === middleSchool[2] || r[3].toString() === middleSchool[3];
        });                    

        const ss7 = SpreadsheetApp.openByUrl(careerorientedinfourl);
        const ws7 = ss7.getSheetByName("career-oriented_activities");
        const careerOrientedData = ws7.getRange(2,2,ws7.getLastRow()-1,9).getValues();    
        const filteredCareerOrientedData = careerOrientedData.filter(function(r){
          return r[1] === sID;
        }).filter(function(r){
          return r[2].toString() === middleSchool[0] || r[2].toString() === middleSchool[1] || r[2].toString() === middleSchool[2] || r[2].toString() === middleSchool[3];
        });                    

        const ss8 = SpreadsheetApp.openByUrl(voluntaryworkinfourl);
        const ws8 = ss8.getSheetByName("voluntary_work");
        const voluntaryWorkData = ws8.getRange(2,2,ws8.getLastRow()-1,9).getValues();
        const filteredVoluntaryWorkData = voluntaryWorkData.filter(function(r){
          return r[1] === sID;
        }).filter(function(r){
          return r[2].toString() === middleSchool[0] || r[2].toString() === middleSchool[1] || r[2].toString() === middleSchool[2] || r[2].toString() === middleSchool[3];
        });

        const ss9 = SpreadsheetApp.openByUrl(subjectinfourl);
        const ws9 = ss9.getSheetByName("Set_2_subject");
        const subjectData = ws9.getRange(2,1,ws9.getLastRow()-1,17).getValues();

        const ss10 = SpreadsheetApp.openByUrl(gradeinfourl);
        const ws10 = ss10.getSheetByName("Set_2_grade_data");
        const gradeData = ws10.getRange(2,1,ws10.getLastRow()-1,9).getValues();
        const filteredGradeData = gradeData.filter(function(r){
          return r[1] === sID;
        }).filter(function(r){
          return r[7].toString() === middleSchool[0] || r[7].toString() === middleSchool[1] || r[7].toString() === middleSchool[2] || r[7].toString() === middleSchool[3];
        });

        //과목PK2를 넣는 이유는... 이래야 같은 학년 같은 과목을 2 선생님 이상이 가르쳐도 학년 평균을 낼 수 있기 때문이지. 평균을 내려면 같은 과목이라면 과목명 똑같이 해야함.
        filteredGradeData.forEach(function(r){
          var subjectAverage = gradeData.filter(function(el){
              return el[8] === r[8] && Number(el[6]) >= 1;  // >= 이걸로 해봤는데, 잘 될까? -> 잘 됨.
          }).map(y => Number(y[6])); //데이터가 strinig이니까 숫자로 바꿔주기 바꿔주는 방법 parseFloat(), Number(), + 이렇게 3가지 있는데... +가 가장 빠르다고 하지만, Number()도 거의 근접하게 빠르고, 명시적이라서 이거 쓰라는데... 잘 될까? -> 잘 됨.
          
          var eachAverage = subjectAverage.reduce((a, b) => (a + b)) / subjectAverage.length;                         
          r.push(eachAverage); //점수 정보 맨 끝에 과목 평균을 붙여 넣는다.

          //여기에 더해서, 학기, 교과, 과목을 가져오면 프론트에서 훨씬 편하겠군. 뒤에 붙여보자.
          var subjectThreeData = subjectData.filter(function(el){
            return el[0] === r[0] 
          });
            r.push(subjectThreeData[0][2],subjectThreeData[0][4],subjectThreeData[0][7])
        });

        const ss11 = SpreadsheetApp.openByUrl(readinginfourl);
        const ws11 = ss11.getSheetByName("reading_record");
        const readingData = ws11.getRange(2,2,ws11.getLastRow()-1,8).getValues();
        const filteredReadingData = readingData.filter(function(r){
          return r[1] === sID;
        }).filter(function(r){
          return r[3].toString() === middleSchool[0] || r[3].toString() === middleSchool[1] || r[3].toString() === middleSchool[2] || r[3].toString() === middleSchool[3];
        });

        const ss12 = SpreadsheetApp.openByUrl(hrteacheropinioninfourl);
        const ws12 = ss12.getSheetByName("HR_teacher_opinions");
        const opinionData = ws12.getRange(2,2,ws12.getLastRow()-1,5).getValues();    
        const filteredOpinionData = opinionData.filter(function(r){
          return r[1] === sID;
        }).filter(function(r){
          return r[4].toString() === middleSchool[0] || r[4].toString() === middleSchool[1] || r[4].toString() === middleSchool[2] || r[4].toString() === middleSchool[3];
        });

        const ss13 = SpreadsheetApp.openByUrl(registrationurl);
        const ws13 = ss13.getSheetByName("SchoolPeriod");
        const schoolPeriodData = ws13.getRange(2,1,ws13.getLastRow()-1,4).getValues();    

        return [filteredRegistrationData, filteredBasicData, filteredAttendanceData, filteredAwardData, filteredVoluntaryActivityData, filteredCareerOrientedData, filteredClubData, filteredVoluntaryWorkData, subjectData, filteredGradeData, filteredReadingData, filteredOpinionData, schoolPeriodData];

      } else if(schoolStage === "고등"){

        const ss1 = SpreadsheetApp.openByUrl(registrationurl);
        const ws1 = ss1.getSheetByName("Set_1_Registration");
        const registrationData = ws1.getRange(2,1,ws1.getLastRow()-1,14).getValues();
        const filteredRegistrationData = registrationData.filter(function(r){
          return r[2] === sID;
        }).filter(function(r){
          return r[5].toString() === highSchool[0] || r[5].toString() === highSchool[1] || r[5].toString() === highSchool[2];
        });  

        const ss2 = SpreadsheetApp.openByUrl(basicinfourl);
        const ws2 = ss2.getSheetByName("Set_1_Basic Info");
        const basicData = ws2.getRange(2,1,ws2.getLastRow()-1,24).getValues();  
        const filteredBasicData = basicData.filter(function(r){
          return r[0] === sID;
        });  

        const ss3 = SpreadsheetApp.openByUrl(attendancehighurl);
        const ws3 = ss3.getSheetByName("Attendance_high");
        const attendanceData = ws3.getRange(2,2,ws3.getLastRow()-1,3).getValues();
        const filteredAttendanceData = attendanceData.filter(function(r){
          return r[0] === sID && r[2] !== "";
        });     

        const ss4 = SpreadsheetApp.openByUrl(awardinfourl);
        const ws4 = ss4.getSheetByName("award");
        const awardData = ws4.getRange(2,2,ws4.getLastRow()-1,12).getValues();    
        const filteredAwardData = awardData.filter(function(r){
          return r[1] === sID;
        }).filter(function(r){
          return r[2].toString() === highSchool[0] || r[2].toString() === highSchool[1] || r[2].toString() === highSchool[2];
        });

        const ss5 = SpreadsheetApp.openByUrl(voluntaryactivityinfourl);
        const ws5 = ss5.getSheetByName("voluntary_activities");
        const voluntaryActivityData = ws5.getRange(2,2,ws5.getLastRow()-1,9).getValues();    
        const filteredVoluntaryActivityData = voluntaryActivityData.filter(function(r){
          return r[1] === sID;
        }).filter(function(r){
          return r[2].toString() === highSchool[0] || r[2].toString() === highSchool[1] || r[2].toString() === highSchool[2];
        });

        const ss6 = SpreadsheetApp.openByUrl(clubinfourl);
        const ws6 = ss6.getSheetByName("club_student_comment");
        const clubData = ws6.getRange(2,1,ws6.getLastRow()-1,11).getValues();
        const filteredClubData = clubData.filter(function(r){
          return r[2] === sID;
        }).filter(function(r){
          return r[3].toString() === highSchool[0] || r[3].toString() === highSchool[1] || r[3].toString() === highSchool[2];
        });                    

        const ss7 = SpreadsheetApp.openByUrl(careerorientedinfourl);
        const ws7 = ss7.getSheetByName("career-oriented_activities");
        const careerOrientedData = ws7.getRange(2,2,ws7.getLastRow()-1,9).getValues();    
        const filteredCareerOrientedData = careerOrientedData.filter(function(r){
          return r[1] === sID;
        }).filter(function(r){
          return r[2].toString() === highSchool[0] || r[2].toString() === highSchool[1] || r[2].toString() === highSchool[2];
        });                    

        const ss8 = SpreadsheetApp.openByUrl(voluntaryworkinfourl);
        const ws8 = ss8.getSheetByName("voluntary_work");
        const voluntaryWorkData = ws8.getRange(2,2,ws8.getLastRow()-1,9).getValues();
        const filteredVoluntaryWorkData = voluntaryWorkData.filter(function(r){
          return r[1] === sID;
        }).filter(function(r){
          return r[2].toString() === highSchool[0] || r[2].toString() === highSchool[1] || r[2].toString() === highSchool[2];
        });

        const ss9 = SpreadsheetApp.openByUrl(subjectinfourl);
        const ws9 = ss9.getSheetByName("Set_2_subject");
        const subjectData = ws9.getRange(2,1,ws9.getLastRow()-1,17).getValues();

        const ss10 = SpreadsheetApp.openByUrl(gradeinfourl);
        const ws10 = ss10.getSheetByName("Set_2_grade_data");
        const gradeData = ws10.getRange(2,1,ws10.getLastRow()-1,9).getValues();
        const filteredGradeData = gradeData.filter(function(r){
          return r[1] === sID;
        }).filter(function(r){
          return r[7].toString() === highSchool[0] || r[7].toString() === highSchool[1] || r[7].toString() === highSchool[2];
        });

        filteredGradeData.forEach(function(r){
          var subjectAverage = gradeData.filter(function(el){
            return el[8] === r[8] && Number(el[6]) >= 1;  
          }).map(y => Number(y[6])); 

          var eachAverage = subjectAverage.reduce((a, b) => (a + b)) / subjectAverage.length;                         
          r.push(eachAverage); //점수 정보 맨 끝에 과목 평균을 붙여 넣는다.

          var subjectThreeData = subjectData.filter(function(el){ return el[0] === r[0] });
          r.push(subjectThreeData[0][2],subjectThreeData[0][4],subjectThreeData[0][7])
        });

        const ss11 = SpreadsheetApp.openByUrl(readinginfourl);
        const ws11 = ss11.getSheetByName("reading_record");
        const readingData = ws11.getRange(2,2,ws11.getLastRow()-1,8).getValues();
        const filteredReadingData = readingData.filter(function(r){
          return r[1] === sID;
        }).filter(function(r){
          return r[3].toString() === highSchool[0] || r[3].toString() === highSchool[1] || r[3].toString() === highSchool[2];
        });

        const ss12 = SpreadsheetApp.openByUrl(hrteacheropinioninfourl);
        const ws12 = ss12.getSheetByName("HR_teacher_opinions");
        const opinionData = ws12.getRange(2,2,ws12.getLastRow()-1,5).getValues();    
        const filteredOpinionData = opinionData.filter(function(r){
          return r[1] === sID;
        }).filter(function(r){
          return r[4].toString() === highSchool[0] || r[4].toString() === highSchool[1] || r[4].toString() === highSchool[2];
        });

        const ss13 = SpreadsheetApp.openByUrl(registrationurl);
        const ws13 = ss13.getSheetByName("SchoolPeriod");
        const schoolPeriodData = ws13.getRange(2,1,ws13.getLastRow()-1,4).getValues();    

        return [filteredRegistrationData, filteredBasicData, filteredAttendanceData, filteredAwardData, filteredVoluntaryActivityData, filteredCareerOrientedData, filteredClubData, filteredVoluntaryWorkData, subjectData, filteredGradeData, filteredReadingData, filteredOpinionData, schoolPeriodData];
      }
    } catch(e){
      if (++count == maxTries){
        throw e;
      } else {
        Utilities.sleep(1000);
      }
    } 
  }
}