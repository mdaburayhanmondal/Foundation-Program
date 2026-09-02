// Question No. 1
function describeValue(value) {
  return `${typeof value} | ${value ? 'truthy' : 'falsy'}`;
}

// Question No. 2
function getDayType(dayName) {
  let status;
  const day = dayName.toLowerCase();

  switch (day) {
    case 'friday' || 'saturday':
      status = 'Weekend';
      break;
    case 'sunday':
      status = 'Working day';
    case 'monday':
      status = 'Working day';
    case 'tuesday':
      status = 'Working day';
    case 'wednesday':
      status = 'Working day';
    case 'thursday':
      status = 'Working day';
      break;

    default:
      status = 'Invalid Day';
      break;
  }
  return status;
}

// Question No. 3
function validateUsername(username) {
  if (username.length < 4) {
    return 'Too Short';
  } else if (username.includes(' ')) {
    return 'No Space Allowed';
  } else if (username.toLowerCase().includes('admin')) {
    return 'Reserved Word';
  } else {
    return 'Available';
  }
}

// Question No. 4
function getCngFare(distance, isNight = false, waitingMinutes = 0) {
  let fare = 50;

  if (distance > 2) {
    fare += (distance - 2) * 15;
  }

  fare += waitingMinutes * 2;

  if (isNight) {
    fare *= 1.2;
  }

  return fare;
}

// Question No. 5
function getChaseVerdict(target, scored, ballsLeft) {
  const runsNeeded = target - scored;

  if (runsNeeded <= 0) {
    return 'Won';
  }

  if (ballsLeft <= 0) {
    return 'Lost';
  }

  const requiredRate = (runsNeeded / ballsLeft) * 6;

  let verdict;
  if (requiredRate <= 6) {
    verdict = 'Comfortable';
  } else if (requiredRate <= 12) {
    verdict = 'Tough';
  } else {
    verdict = 'Almost Impossible';
  }

  return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
}
