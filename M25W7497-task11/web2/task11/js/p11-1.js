const GU = 1;
const CHOKI = 2;
const PA = 3;

function getPlayerHand() {
    let playerInput = document.querySelector("#playerInput").value;
    let hand = Number(playerInput);

    if (hand !== GU && hand !== CHOKI && hand !== PA) {
        return null;
    }

    return hand;
}

function getComputerHand() {
    return Math.floor(Math.random() * 3) + 1;
}

function judgeWinner(playerHand, computerHand) {
    if (playerHand === computerHand) {
        return "引き分けです";
    } else if (
        (playerHand === GU && computerHand === CHOKI) ||
        (playerHand === CHOKI && computerHand === PA) ||
        (playerHand === PA && computerHand === GU)
    ) {
        return "あなたの勝ちです";
    } else {
        return "あなたの負けです";
    }
}

function getHandName(hand) {
    const handName = ["", "グー", "チョキ", "パー"];
    return handName[hand];
}

function playGame() {
    const playerHand = getPlayerHand();

    if (playerHand === null) {
        document.querySelector("#result").innerHTML = "無効な入力です。";
        return;
    }

    const computerHand = getComputerHand();
    const result = judgeWinner(playerHand, computerHand);

    let resultMessage = `あなた：${getHandName(playerHand)},コンピュータ: ${getHandName(computerHand)},<br>`;
    resultMessage += result;

    document.querySelector("#result").innerHTML = resultMessage;
}

document.querySelector("#playBtn").addEventListener("click", playGame);
