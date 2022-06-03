export const BALANCE_URL = "/balance";
export const QUESTIONS_URL = "/questions";

export const PREV_NAV = "PREV";
export const NEXT_NAV = "NEXT";

export const LEVEL_ONE_LIST = [
  "양념치킨 vs 후라이드 치킨",
  "짬뽕 vs 짜장면",
  "탕수육 찍먹 vs 탕수육 부먹",
  "겨울 vs 여름",
  "아이스 아메리카노(아아) vs 뜨거운 아메리카노(뜨아)",
  "사랑 vs 우정",
  "이상형과 연애하고 친구 손절 vs 혼자살며 평생 친구하기",
  "친구 전 애인과 연애하기 vs 전 애인 친구랑 연애하기",
  "빚만 100억, 외모는 이상형 vs 자산 100억, 폭탄남 또는 폭탄녀",
  "100% 1억 받기 vs 25% 확률로 10억 받기",
  "친구한테 소고기 사주기 vs 돈에 땅 버리기",
  "빚이 100억인데, 나만 보는 애인 vs 돈 100억인데, 바람피는 애인",
  "다시 태어나도 애인과 결혼하기 vs 다시 태어나도 부모님 자식으로 태어나기",
  "애인이랑 만나서 본인 이야기만 하기 vs 애인이랑 만나서 애인 이야기만 하기",
  "대머리 애인 vs 털복숙이 애인",
  "제일 싫어하는 사람과 같이 1억 복권당첨되기 vs 거지로 살기",
  "추성훈 선수한테 맞고 이국종 교수한테 수술받기 vs 이국종교수한테 맞고 추성훈선수에게 수술받기",
];

export const BALANCE_LIST = [
  ...LEVEL_ONE_LIST.map((el, i) => {
    return {
      id: i + 1,
      question: el,
      level: 1,
    };
  }),
];
