document.addEventListener('DOMContentLoaded', () => {
    const actionButton = document.getElementById('actionButton');
    const messageDisplay = document.getElementById('messageDisplay');
    const mainDescription = document.getElementById('mainDescription');
    const gameContainer = document.getElementById('gameContainer');
    const cardGrid = document.getElementById('cardGrid');
    const gameMessage = document.getElementById('gameMessage');
    const restartButton = document.getElementById('restartButton');
    const attemptsLeftDisplay = document.getElementById('attemptsLeftDisplay');

    // 모달 관련 요소
    const specialImageModal = document.getElementById('specialImageModal');
    const modalSpecialImage = document.getElementById('modalSpecialImage');
    const closeModalButton = document.getElementById('closeModalButton');

    // --- Message Display Logic ---
    const messages = [
        "당신은 평화로운 하루를 보낼 것입니다.",
        "수호신의 기운이 당신을 지켜줄 것입니다.",
        "새로운 긍정적인 에너지가 샘솟을 것입니다.",
        "내면의 평화를 찾고 안정감을 느껴보세요.",
        "모든 부정적인 기운이 정화될 것입니다.",
        "당신의 마음은 고요한 호수와 같습니다.",
        "밝은 빛이 당신의 길을 비춥니다.",
        "오늘 당신에게 행운이 가득할 것입니다.",
        "지친 영혼에 활력이 다시 찾아옵니다.",
        "근심 걱정은 사라지고 기쁨만 남습니다.",
        "깊은 숨을 쉬고 평온을 받아들이세요.",
        "당신의 영혼은 항상 보호받고 있습니다.",
        "모든 어둠이 빛으로 변할 것입니다.",
        "당신의 내면에는 무한한 힘이 있습니다.",
        "감사의 마음이 당신을 치유할 것입니다.",
        "현재에 집중하고 행복을 누리세요.",
        "불안은 사라지고 용기가 충만해집니다.",
        "당신의 모든 소망이 이루어질 것입니다.",
        "마음의 짐을 내려놓고 가볍게 나아가세요.",
        "새로운 시작을 위한 문이 열립니다.",
        "자연의 기운이 당신을 감싸 안습니다.",
        "긍정적인 생각은 긍정적인 현실을 만듭니다.",
        "당신은 사랑받고 있으며 소중한 존재입니다.",
        "건강과 활력이 당신에게 넘쳐납니다.",
        "모든 어려움은 성장의 기회가 됩니다.",
        "평화가 당신의 삶에 깃들 것입니다.",
        "당신의 주변은 사랑으로 가득합니다.",
        "용서와 이해가 당신을 자유롭게 합니다.",
        "매 순간이 새로운 축복입니다.",
        "당신의 모든 노력이 보상받을 것입니다.",
        "지혜가 당신의 결정을 이끌 것입니다.",
        "두려워하지 말고 앞으로 나아가세요.",
        "당신은 강인하며 지칠 줄 모릅니다.",
        "고통은 잠시, 행복은 영원합니다.",
        "당신의 꿈은 현실이 될 준비가 되어 있습니다.",
        "진정한 자신을 발견하는 하루가 되세요.",
        "모든 관계가 조화롭게 흐를 것입니다.",
        "당신의 에너지는 긍정적인 변화를 만듭니다.",
        "평온함이 당신의 하루를 감쌀 것입니다.",
        "감사하는 마음으로 풍요를 불러오세요.",
        "당신의 선택은 항상 최선일 것입니다.",
        "과거는 흘려보내고 현재를 살아라.",
        "밝은 미래가 당신을 기다립니다.",
        "모든 순간이 기적의 연속입니다.",
        "당신은 성공을 위해 태어났습니다.",
        "내면의 평화가 외면의 아름다움을 만듭니다.",
        "당신의 마음은 치유의 힘을 가지고 있습니다.",
        "새로운 기회가 당신을 찾아옵니다.",
        "긍정적인 생각은 강력한 씨앗입니다.",
        "당신의 존재는 세상에 빛을 더합니다.",
        "불안감을 떨쳐버리고 자신감을 가지세요.",
        "당신의 모든 세포가 건강으로 빛납니다.",
        "오늘 당신에게 좋은 일이 일어날 것입니다.",
        "깊은 휴식이 당신의 영혼을 재충전합니다.",
        "당신의 내면의 빛은 항상 밝게 타오릅니다.",
        "걱정은 강물처럼 흘려보내세요.",
        "당신은 모든 것을 이겨낼 수 있습니다.",
        "평화로운 마음으로 세상을 바라보세요.",
        "당신의 가치는 무한합니다.",
        "진정한 행복은 당신 안에 있습니다.",
        "모든 문제가 해결될 것입니다.",
        "당신의 영혼은 자유롭고 평화롭습니다.",
        "삶의 모든 경험이 당신을 성장시킵니다.",
        "자신을 사랑하고 받아들이세요.",
        "긍정적인 에너지가 당신을 감싸고 있습니다.",
        "당신은 항상 올바른 길을 걷고 있습니다.",
        "매일 새로운 배움을 받아들이세요.",
        "당신의 생각은 당신의 현실을 창조합니다.",
        "기쁨이 당신의 삶을 가득 채울 것입니다.",
        "모든 것이 순조롭게 흘러갈 것입니다.",
        "당신의 영감은 무한합니다.",
        "용기와 희망이 당신과 함께합니다.",
        "당신의 마음은 평온과 고요함으로 가득합니다.",
        "모든 부정적인 감정을 놓아주세요.",
        "당신의 삶은 축복으로 넘쳐납니다.",
        "자연의 소리에 귀 기울여 보세요.",
        "당신은 원하는 모든 것을 이룰 수 있습니다.",
        "현재의 순간을 감사하며 즐기세요.",
        "평화로운 밤이 당신을 기다립니다.",
        "당신의 영혼은 빛과 사랑으로 가득합니다.",
        "모든 것이 잘 될 것입니다.",
        "당신의 내면에는 평화의 샘이 있습니다.",
        "자신을 믿고 나아가세요.",
        "당신은 강하고 유능한 사람입니다.",
        "새로운 통찰력이 당신에게 찾아옵니다.",
        "마음의 정원이 아름답게 가꾸어집니다.",
        "모든 걱정이 사라지고 안심하게 됩니다.",
        "당신의 발걸음은 항상 빛을 향합니다.",
        "평화가 당신의 주변을 감쌉니다.",
        "행복은 작은 것에 있습니다.",
        "당신의 영혼은 깨끗하고 순수합니다.",
        "긍정적인 태도가 모든 것을 바꿉니다.",
        "당신의 존재 자체로 충분합니다.",
        "모든 상처가 치유될 것입니다.",
        "당신은 항상 보호받고 있습니다.",
        "마음의 문을 열고 사랑을 받아들이세요.",
        "당신의 영감은 당신을 이끌 것입니다.",
        "모든 순간에 감사함을 느끼세요.",
        "평화로운 에너지가 당신에게 흐릅니다.",
        "당신의 삶은 기쁨으로 가득 찰 것입니다."
    ];

    // 초기 상태 설정: 메시지 버튼 클릭 이벤트 리스너
    actionButton.addEventListener('click', showRandomMessage);

    // 메시지를 표시하고 게임 시작 버튼으로 전환하는 함수
    function showRandomMessage() {
        const randomIndex = Math.floor(Math.random() * messages.length);
        const randomMessage = messages[randomIndex];

        // 메시지 표시 애니메이션 초기화 및 설정
        messageDisplay.style.animation = 'none';
        void messageDisplay.offsetWidth; // 리플로우 강제
        messageDisplay.textContent = randomMessage;
        messageDisplay.style.animation = 'fadeMessageIn 0.8s ease-out forwards';

        // 버튼 텍스트와 스타일 변경, 이벤트 리스너 교체 (한 번만 실행되도록)
        actionButton.textContent = '정화의 카드 찾기 시작';
        actionButton.classList.add('red-button'); // 버튼에 red-button 클래스 추가
        actionButton.removeEventListener('click', showRandomMessage); // 기존 리스너 제거
        actionButton.addEventListener('click', startGame); // 새 리스너 추가

        mainDescription.textContent = '수호신의 기운과 함께 정화의 카드를 찾아보세요.';
    }

    // --- Card Game Logic ---
    const TOTAL_CARDS = 32;
    const SPECIAL_CARDS_COUNT = 1;
    const MAX_ATTEMPTS = 3;

    let specialCardIndices = [];
    let attemptsLeft = MAX_ATTEMPTS;
    let gameActive = false;

    // 게임 초기화 함수
    function initializeGame() {
        cardGrid.innerHTML = ''; // 카드 그리드 초기화
        specialCardIndices = [];
        attemptsLeft = MAX_ATTEMPTS;
        gameActive = true;

        // 게임 정보 메시지 및 시도 횟수 업데이트
        gameMessage.textContent = `${TOTAL_CARDS}장의 카드 중 ${SPECIAL_CARDS_COUNT}장의 특별한 카드를 ${MAX_ATTEMPTS}번의 기회 안에 찾아보세요!`;
        gameMessage.classList.remove('win', 'lose'); // 이전 결과 클래스 제거
        attemptsLeftDisplay.textContent = attemptsLeft;
        restartButton.classList.add('hidden'); // 재시작 버튼 숨김
        specialImageModal.classList.add('hidden'); // 모달 숨김

        // 특별한 카드 인덱스 랜덤 할당
        const allIndices = Array.from({ length: TOTAL_CARDS }, (_, i) => i);
        for (let i = 0; i < SPECIAL_CARDS_COUNT; i++) {
            const randomIndex = Math.floor(Math.random() * allIndices.length);
            specialCardIndices.push(allIndices.splice(randomIndex, 1)[0]);
        }
        console.log("Special Card Indices:", specialCardIndices); // 개발자 도구에서 특별 카드 확인용

        // 카드 생성
        for (let i = 0; i < TOTAL_CARDS; i++) {
            const card = document.createElement('div');
            card.classList.add('card');
            card.dataset.index = i; // 데이터 속성에 인덱스 저장

            const cardBack = document.createElement('div');
            cardBack.classList.add('card-back');
            cardBack.textContent = '?'; // 카드 뒷면 물음표

            const cardInner = document.createElement('div');
            cardInner.classList.add('card-inner'); // 카드 앞면 내용

            card.appendChild(cardBack);
            card.appendChild(cardInner);
            card.addEventListener('click', handleCardClick); // 클릭 이벤트 리스너 추가
            cardGrid.appendChild(card);
        }
    }

    // 게임 시작 함수
    function startGame() {
        actionButton.classList.add('hidden'); // 시작 버튼 숨김
        messageDisplay.classList.add('hidden'); // 메시지 디스플레이 숨김
        gameContainer.classList.remove('hidden'); // 게임 컨테이너 표시
        mainDescription.textContent = '행운을 빌어요!'; // 설명 텍스트 변경
        initializeGame(); // 게임 초기화 시작
    }

    // 카드 클릭 처리 함수
    function handleCardClick(event) {
        if (!gameActive || attemptsLeft <= 0) return; // 게임 비활성 또는 시도 횟수 없으면 종료

        const clickedCard = event.currentTarget;
        if (clickedCard.classList.contains('flipped')) {
            return; // 이미 뒤집힌 카드는 무시
        }

        clickedCard.classList.add('flipped'); // 카드 뒤집기
        attemptsLeft--; // 시도 횟수 감소
        attemptsLeftDisplay.textContent = attemptsLeft; // 화면 업데이트

        const isSpecial = specialCardIndices.includes(parseInt(clickedCard.dataset.index));
        const cardInner = clickedCard.querySelector('.card-inner'); // 카드 앞면 요소 가져오기

        if (isSpecial) {
            console.log("Special card found!"); // 특별 카드 발견 로그
            if (cardInner) {
                cardInner.textContent = '☀️'; // 특별 카드 아이콘 표시
            }
            clickedCard.classList.add('found'); // 'found' 클래스 추가

            // 특별 카드 발견 시 모달 표시
            modalSpecialImage.src = '엄청난 수호신과 정화의 기운ChatGPT Image 2025년 6월 19일 오전 09_30_29.png'; // PNG 확장자로 변경
            specialImageModal.classList.remove('hidden'); // 모달 띄우기
            console.log("Modal display triggered. Image source set to:", modalSpecialImage.src); // 이미지 소스 및 모달 상태 로그

            endGame(true); // 게임 종료 (승리)
        } else {
            console.log("Not a special card. Attempts left:", attemptsLeft); // 일반 카드 클릭 로그
            gameMessage.textContent = `아쉽네요... 특별한 카드가 아닙니다. 남은 기회: ${attemptsLeft}번`;
            // 잠시 후 카드 다시 뒤집기
            setTimeout(() => {
                clickedCard.classList.remove('flipped');
                if (attemptsLeft === 0) {
                    endGame(false); // 시도 횟수 없으면 게임 종료 (패배)
                }
            }, 800);
        }

        // 특별 카드를 찾지 못했고, 시도 횟수가 0이 된 경우 바로 패배 처리
        if (!isSpecial && attemptsLeft === 0) {
            endGame(false);
        }
    }

    // 게임 종료 함수
    function endGame(isWin) {
        gameActive = false; // 게임 비활성화
        if (isWin) {
            gameMessage.textContent = '축하합니다! 특별한 정화의 카드를 찾았습니다!';
            gameMessage.classList.add('win');
            // 찾지 못한 나머지 카드들도 뒤집어서 특별 카드를 보여줌
            document.querySelectorAll('.card:not(.flipped)').forEach(card => {
                card.classList.add('flipped');
                const cardInner = card.querySelector('.card-inner');
                if (cardInner && specialCardIndices.includes(parseInt(card.dataset.index))) {
                    cardInner.textContent = '☀️';
                }
            });
        } else {
            gameMessage.textContent = `아쉽게도 특별한 카드를 찾지 못했습니다.`;
            gameMessage.classList.add('lose');
            // 모든 카드를 뒤집어서 특별 카드의 위치를 보여줌
            document.querySelectorAll('.card').forEach(card => {
                card.classList.add('flipped');
                const cardInner = card.querySelector('.card-inner');
                if (cardInner) {
                    if (specialCardIndices.includes(parseInt(card.dataset.index))) {
                        cardInner.textContent = '☀️';
                        card.classList.add('found');
                    } else {
                        cardInner.textContent = ''; // 일반 카드는 빈 칸
                    }
                }
            });
            specialImageModal.classList.add('hidden'); // 패배 시 모달 숨김
        }
        restartButton.classList.remove('hidden'); // 재시작 버튼 표시
    }

    // 모달 닫기 버튼 이벤트 리스너
    closeModalButton.addEventListener('click', () => {
        specialImageModal.classList.add('hidden');
    });

    // 재시작 버튼 이벤트 리스너
    restartButton.addEventListener('click', () => {
        gameContainer.classList.add('hidden'); // 게임 컨테이너 숨김
        actionButton.textContent = '정화의 메시지 받기'; // 버튼 텍스트 초기화
        actionButton.classList.remove('hidden', 'red-button'); // 버튼 표시 및 빨간색 제거
        messageDisplay.classList.remove('hidden'); // 메시지 디스플레이 표시
        messageDisplay.textContent = ''; // 메시지 내용 초기화
        mainDescription.textContent = '당신에게 평화와 긍정을 선사합니다.'; // 설명 텍스트 초기화
        actionButton.removeEventListener('click', startGame); // 게임 시작 리스너 제거
        actionButton.addEventListener('click', showRandomMessage); // 메시지 리스너 재설정
        specialImageModal.classList.add('hidden'); // 모달 숨김
    });
});