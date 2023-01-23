import dayjs from "dayjs";

// function that get all days of 2023 at the moment (used to create qnt checkbox )
export function generateDatesFromYearBeginning(){
  const fristDayOfTheYear = dayjs().startOf('year');

  const today = new Date()

  const dates = []
  let compareDate = fristDayOfTheYear

  while(compareDate.isBefore(today)){
    dates.push(compareDate.toDate())
    compareDate = compareDate.add(1, 'day')
  }

  return dates
}