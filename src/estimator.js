const covid19ImpactEstimator = (data) => data;

  data = {
    region: {
        name: "Africa",
        avgAge: 19.7,
        avgDailyIncomeInUSD: 4,
        avgDailyIncomePopulation: 0.73
    },
        periodType: "days",
        timeToElapse: 38,
        reportedCases:2747,
        population: 92931687,
        totalHospitalBeds: 678874
    },
    estimate = {
        impact: {
            currentlyInfected : function() {
                reportedCases * 10;
                },
            infectionsByRequestedTime : function() {
                days = impact.currentlyInfected * 512;
                weeks = days/7;
                months = days/30;
            },
            severeCasesByRequestedTime : function(){
                return impact.infectionsByRequestedTime * 0.15;
            }
            },
        severeImpact: {
            currentlyInfected : function() {
                reportedCases * 50;
            },
            infectionsByRequestedTime : function(){
                days = severeImpact.currentlyInfected * 512;
                weeks = days/7;
                months = days/30;
            },
            severeCasesByRequestedTime : function(){
                return severeImpact.infectionsByRequestedTime * 0.15;
            },
            hospitalBedsByRequestedTime : function(){
                return totalHospitalBeds - severeImpact.severeCasesByRequestedTime;
            }
        },
    }

}

export default covid19ImpactEstimator;

