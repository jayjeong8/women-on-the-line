import ArtworkImage from '@/app/components/artworkImage';

const artsInfo = [
    {
        src: 'arts/tasha_tudor.png',
        title: 'Tasha Tudor',
        description:
            '“우리 집 정원은 나의 자존심이에요.” ' +
            '동화 같은 사계절을 살았던 자연주의자 타샤 튜더의 삶을 바라보고 있으면 어느샌가 그동안 내가 견디고 살았던 모든 시간들이 그녀의 손가락 끝으로 쓰다듬을 받는 듯한 기분이 든다. ' +
            '무엇이 중요하다고 외치며 살았나, 왜 그토록 여유롭지 못했나, 고개를 갸우뚱하게 된다.\n' +
            '\n' +
            '시간을 여행할 수 있다면 언젠가는 30만 평의 초록색 화원에 초대받고 싶다. ' +
            '그녀가 정원을 가꾸는 동안 나는 그 옆에 앉아 차마 돌보지 못하고 살았던 나를 가꾸고 싶다. ' +
            '결국엔 우리의 평안이 우리의 자존심일 것이다.',
    },
    {
        src: 'arts/elizabeth_bowen.png',
        title: 'Elizabeth Bowen',
        description:
            '일본의 그래픽 디자이너 하라 켄야는 디자인 이 뭐냐는 질문에 “신체 감각이 이미 알고 있는 것을 재인식하게 만드는 프로세스”라고 답했다. ' +
            '전시를 준비하면서 본질적으로 미술이 뭘까에 대한 답을 찾아 탐험하며 이 그림을 그렸다.\n' +
            '\n' +
            '이 여성은 1900년대 소설가 Elizabeth Bowen 이다. 내가 그린 그녀의 모습은 무언가 할 말이 많아 보인다. ' +
            '그녀는 이제 세상에 없다. 나는 다시 그녀의 형상을 들춰내어 기억한다. ' +
            '그림을 그리는 과정과 결과물은 하라 켄야의 말처럼 어떠한 것을 재인식하게 만드는 프로세스 같다.\n',
    },

    {
        src: 'arts/sylvia_plath.png',
        title: 'Sylvia Plath',
        description:
            '“죽음은 아름다워야 한다. 머리 위로 풀들이 흔들리고, 갈색의 부드러운 흙 위에 누워, 침묵에 귀 기울이는 것. ' +
            '어제도 내일도 없는 것. 시간을 잊고, 삶을 용서하고, 평화로운 것.”\n' +
            '\n' +
            '짧은 삶 내내 우울증과의 끝없는 싸움을 했던 실비아 플라스. ' +
            '그녀는 지금 나와 같은 나이에 자살했다. 부엌에 있던 오븐 속에 머리를 집어넣은 채 가스를 틀고 죽었다. ' +
            '서른 살의 젊은 시인의 마지막이 오븐에서 끝났다. 내가 그린 그녀의 모습이 너무나 어여쁜 나머지 초상을 그리는 내내 마음이 찢어질 것 같았다. ' +
            '어딘가를 향해 환하게 웃고 있는, 전란에 시달리던 한 여성의 삶을 기억하며.\n',
    },
];

export default function MainArts() {
    return (
        <section className="grid grid-cols-10 h-screen py-32">
            <h2 className="z-10 px-6 py-3 ko-font text-5xl tracking-tighter">
                <div>선 위의</div>
                <div>여성들</div>
            </h2>
            {artsInfo.map(({ src, title, description }) => (
                <div key={title} className="col-span-2 group hover:col-span-5 hover:flex hover:items-start px-4">
                    <ArtworkImage className="w-full aspect-2/3 group-hover:w-1/2" src={src} />
                    <div className="py-2 group-hover:px-6 group-hover:w-1/2">
                        <h2 className="en-font text-2xl font-bold tracking-tighter mb-6 ml-2">{title}</h2>
                        <p className="ko-font text-gray-500 text-lg tracking-tighter ml-2 truncate group-hover:whitespace-pre-wrap">
                            {description}
                        </p>
                    </div>
                </div>
            ))}
        </section>
    );
}
