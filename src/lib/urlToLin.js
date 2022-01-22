/*
Params:
  String (url from BBO)
  Number n (number of board, from 1 and above)
*/
export default function urlToLin (string, n = 1) {
  if (string === '') return '';

  const groups = matchGroups(string);
  if (groups === '') return '';

  return buildLin(groups, n);
}

/*
Params:
  String (url from BBO)
Returns:
  Obj { playerNames(string), hands(string), biddingAndPlay(string) }
*/
function matchGroups (string) {
  const match =
    string
      .replaceAll('%20', ' ')
      .replaceAll('%7C', '|')
      .match(/(http.*lin=st)\|\|pn\|(?<playerNames>.*)\|md\|[1-4](?<hands>[2-9AKQJTSHDC]{17},[2-9AKQJTSHDC]{17},[2-9AKQJTSHDC]{17},[2-9AKQJTSHDC]{17}).*Board [0-9]\|*(?<biddingAndPlay>.*)/)

  if (!match) return '';

  return match.groups;
}

/*
Params:
  Obj { playerNames(string), hands(string), biddingAndPlay(string) }
  Number n (number of board, from 1 and above)
Returns:
  String (formatted lin with calculated vul and dealer by board number)
*/
function buildLin ({playerNames: pn, hands, biddingAndPlay: bap}, n) {
  const d = dealerByIndex(n);
  const v = vulByIndex(n);
  return `qx|o${n}|${pn}|md|${d}${hands}|sv|${v}|rh||ah|Board ${n}|${bap}`;
}

function dealerByIndex (index) {
  // 1 = south, 2 = west, 3 = north and 4 = east
  return ((index + 1) % 4) + 1;
}

function vulByIndex (index) {
  // o = none, n = north and south, e = east and west, b = all (both)
  switch (index) {
    case 1: return 'o';
    case 2: return 'n';
    case 3: return 'e';
    case 4: return 'b';
    case 5: return 'n';
    case 6: return 'e';
    case 7: return 'b';
    case 8: return 'o';
    case 9: return 'e';
    case 10: return 'b';
    case 11: return 'o';
    case 12: return 'n';
    case 13: return 'b';
    case 14: return 'o';
    case 15: return 'n';
    case 16: return 'e';
    case 0: return 'e'; // board 0 shouldn't be allowed, but who knows
    default: return vulByIndex(index % 16);
  }
}
