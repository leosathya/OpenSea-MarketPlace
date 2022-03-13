import Image from "next/image";
import React from "react";

import Header from "../components/Header";
import Link from "next/link";

import catc from "../assets/catc.png";
import invincible from "../assets/invincible.png";
import cryp from "../assets/cryp.png";
import cyberkongz from "../assets/cyberkongz.png";
import gfc from "../assets/gfc.png";
import lander from "../assets/lander.png";
import metakongz from "../assets/metakongz.png";
import oxya from "../assets/oxya.png";
import zed from "../assets/zed.png";
import zed2 from "../assets/zed2.png";

const style = {
	main: `overflow-x-hidden`,

	nftCollectionsContainer: `py-7 px-9 grid grid-cols-2 gap-11`,
	nftCollectionsCard: `pb-9 rounded-lg hover:shadow-lg`,
	nftCollectionsBanner: `overflow-hidden`,
	nftCollectionsProfile: `mx-auto w-28 h-auto object-cover rounded-full boredr border-2 border-[#202225] mt-[-4rem]`,
	nftCollectionsProfileImage: ``,
	nftCollectionsInfo: `w-full flex flex-col items-center`,
	nftCollectionsInfoTitle: `text-3xl font-bold text-white mb-2`,
	nftCollectionscreatedBy: `text-lg text-white`,
	nftCollectionsDesc: `text-[#8a939b] text-xl text-center px-7 w-max-1/4 flex-wrap mt-4`,
};

const nftCollections = () => {
	return (
		<div className={style.main}>
			<Header />
			<div className={style.nftCollectionsContainer}>
				<Link href="/collections/0xbC5f4651Be6AE39893A700dC181794708D292082">
					<div className={style.nftCollectionsCard}>
						<div className={style.nftCollectionsBanner}>
							<img
								src={
									"https://lh3.googleusercontent.com/buhkgp9EPv2YoCeB9k1XWMX7hkBbkpIFkwOdveTZPsVOuKiANbDBwjvAxSpvxhbh5NxU0Kkjje-3VVWk36z-f4Z5rlmAHZXMeisu=h600"
								}
							/>
						</div>
						<div className={style.nftCollectionsProfile}>
							<img src={"https://ik.imagekit.io/bayc/assets/bayc-footer.png"} />
						</div>
						<div className={style.nftCollectionsInfo}>
							<h2 className={style.nftCollectionsInfoTitle}>
								Cyber Funk Ape Club
							</h2>
							<div className={style.nftCollectionscreatedBy}>
								Created by <span className="text-[#2081e2]">LeoSathya</span>
							</div>
							<div className={style.nftCollectionsDesc}>
								Meta adventure is an online play-to-ernie game where you play as
								a cyberpunkMeta adventure is an online play-to-ernie game where
								you play as a cyberpunk....
							</div>
						</div>
					</div>
				</Link>

				<Link href="/collections/0x8562a64BDb74Ef3528eB73cD6ba1f3E8Ce5DE846">
					<div className={style.nftCollectionsCard}>
						<div className={style.nftCollectionsBanner}>
							<img
								src={
									"https://pbs.twimg.com/media/FMifcuNaAAE30wU?format=jpg&name=large"
								}
							/>
						</div>
						<div className={style.nftCollectionsProfile}>
							<Image src={lander} />
						</div>
						<div className={style.nftCollectionsInfo}>
							<h2 className={style.nftCollectionsInfoTitle}>3Landers Club</h2>
							<div className={style.nftCollectionscreatedBy}>
								Created by <span className="text-[#2081e2]">LeoSathya</span>
							</div>
							<div className={style.nftCollectionsDesc}>
								Meta adventure is an online play-to-ernie game where you play as
								a cyberpunkMeta adventure is an online play-to-ernie game where
								you play as a cyberpunk....
							</div>
						</div>
					</div>
				</Link>

				<Link href="/collections/0x9d8431101634fdF7c37c1687BAd3D3B34aB93408">
					<div className={style.nftCollectionsCard}>
						<div className={style.nftCollectionsBanner}>
							<img
								src={
									"https://nftcalendar.io/storage/uploads/2022/02/20/1500x500__1__0220202213093462123d8e4fa54.jpg"
								}
							/>
						</div>
						<div className={style.nftCollectionsProfile}>
							<Image src={catc} />
						</div>
						<div className={style.nftCollectionsInfo}>
							<h2 className={style.nftCollectionsInfoTitle}>
								StarCatchers Club
							</h2>
							<div className={style.nftCollectionscreatedBy}>
								Created by <span className="text-[#2081e2]">LeoSathya</span>
							</div>
							<div className={style.nftCollectionsDesc}>
								Meta adventure is an online play-to-ernie game where you play as
								a cyberpunkMeta adventure is an online play-to-ernie game where
								you play as a cyberpunk....
							</div>
						</div>
					</div>
				</Link>

				<Link href="/collections/0xcf073C814D2B4dFe201DA150a31CC74094E51BFf">
					<div className={style.nftCollectionsCard}>
						<div className={style.nftCollectionsBanner}>
							<img
								src={
									"https://nftcalendar.io/storage/uploads/2022/01/04/1500x500_0104202217301161d48423059c8.png"
								}
							/>
						</div>
						<div className={style.nftCollectionsProfile}>
							<Image src={invincible} />
						</div>
						<div className={style.nftCollectionsInfo}>
							<h2 className={style.nftCollectionsInfoTitle}>
								Invincible Friend Club
							</h2>
							<div className={style.nftCollectionscreatedBy}>
								Created by <span className="text-[#2081e2]">LeoSathya</span>
							</div>
							<div className={style.nftCollectionsDesc}>
								Meta adventure is an online play-to-ernie game where you play as
								a cyberpunkMeta adventure is an online play-to-ernie game where
								you play as a cyberpunk....
							</div>
						</div>
					</div>
				</Link>

				<div className={style.nftCollectionsCard}>
					<div className={style.nftCollectionsBanner}>
						<img
							src={
								"https://lh3.googleusercontent.com/rlvS7hiDKdB64BoPuPMxjgD0S3k_49n8hxtmSzpsyArghcrRaOyBRVwQSr2STw5TOJ6apKe5IX--X_mF0IR36vq9yiU0nIx1DCp0Mg=h600"
							}
						/>
					</div>
					<div className={style.nftCollectionsProfile}>
						<Image src={cryp} />
					</div>
					<div className={style.nftCollectionsInfo}>
						<h2 className={style.nftCollectionsInfoTitle}>Crypto Punks</h2>
						<div className={style.nftCollectionscreatedBy}>
							Created by <span className="text-[#2081e2]">LeoSathya</span>
						</div>
						<div className={style.nftCollectionsDesc}>
							Meta adventure is an online play-to-ernie game where you play as a
							cyberpunkMeta adventure is an online play-to-ernie game where you
							play as a cyberpunk....
						</div>
					</div>
				</div>
				<div className={style.nftCollectionsCard}>
					<div className={style.nftCollectionsBanner}>
						<img
							src={
								"https://lh3.googleusercontent.com/6n5PYAb2neY1IBBE-CFojJ0dSDAFQ9rnpXSTLEmBlM2dfSjSUsVgJjOiOhQ8Fi91UwBXgebT-vYQkXLrXK2XlWPZKyKR1Uo75QU5UA=h600"
							}
						/>
					</div>
					<div className={style.nftCollectionsProfile}>
						<Image src={metakongz} />
					</div>
					<div className={style.nftCollectionsInfo}>
						<h2 className={style.nftCollectionsInfoTitle}>The Meta Kongz</h2>
						<div className={style.nftCollectionscreatedBy}>
							Created by <span className="text-[#2081e2]">LeoSathya</span>
						</div>
						<div className={style.nftCollectionsDesc}>
							Meta adventure is an online play-to-ernie game where you play as a
							cyberpunkMeta adventure is an online play-to-ernie game where you
							play as a cyberpunk....
						</div>
					</div>
				</div>
				<div className={style.nftCollectionsCard}>
					<div className={style.nftCollectionsBanner}>
						<img
							src={
								"https://coxxstables.com/wp-content/uploads/2021/04/02-welcome-image-1024x512-1.png"
							}
						/>
					</div>
					<div className={style.nftCollectionsProfile}>
						<Image src={zed2} />
					</div>
					<div className={style.nftCollectionsInfo}>
						<h2 className={style.nftCollectionsInfoTitle}>ZED RUN</h2>
						<div className={style.nftCollectionscreatedBy}>
							Created by <span className="text-[#2081e2]">LeoSathya</span>
						</div>
						<div className={style.nftCollectionsDesc}>
							Meta adventure is an online play-to-ernie game where you play as a
							cyberpunkMeta adventure is an online play-to-ernie game where you
							play as a cyberpunk....
						</div>
					</div>
				</div>
				<div className={style.nftCollectionsCard}>
					<div className={style.nftCollectionsBanner}>
						<img
							src={"https://www.uniqly.io/stores/cyberkongz-classic/banner.png"}
						/>
					</div>
					<div className={style.nftCollectionsProfile}>
						<Image src={cyberkongz} />
					</div>
					<div className={style.nftCollectionsInfo}>
						<h2 className={style.nftCollectionsInfoTitle}>Cyber Kongz</h2>
						<div className={style.nftCollectionscreatedBy}>
							Created by <span className="text-[#2081e2]">LeoSathya</span>
						</div>
						<div className={style.nftCollectionsDesc}>
							Meta adventure is an online play-to-ernie game where you play as a
							cyberpunkMeta adventure is an online play-to-ernie game where you
							play as a cyberpunk....
						</div>
					</div>
				</div>
				<div className={style.nftCollectionsCard}>
					<div className={style.nftCollectionsBanner}>
						<img
							src={
								"https://nitter.net/pic/media%2FFIGy7hMWYAIgCTw.jpg%3Fname%3Dsmall"
							}
						/>
					</div>
					<div className={style.nftCollectionsProfile}>
						<Image src={oxya} />
					</div>
					<div className={style.nftCollectionsInfo}>
						<h2 className={style.nftCollectionsInfoTitle}>
							Oxya Origin Projects
						</h2>
						<div className={style.nftCollectionscreatedBy}>
							Created by <span className="text-[#2081e2]">LeoSathya</span>
						</div>
						<div className={style.nftCollectionsDesc}>
							Meta adventure is an online play-to-ernie game where you play as a
							cyberpunkMeta adventure is an online play-to-ernie game where you
							play as a cyberpunk....
						</div>
					</div>
				</div>
				<div className={style.nftCollectionsCard}>
					<div className={style.nftCollectionsBanner}>
						<img
							src={
								"https://lh3.googleusercontent.com/p6-kF1oZV19el01CYv-jIkTOZnsfnSrGTKygV_9dD51mg3fzRgMsxY64T72gZNG-3WEXSHlBYmJdjPKWaXt5Ya70kor4cl6UKg4A3g=h600"
							}
						/>
					</div>
					<div className={style.nftCollectionsProfile}>
						<Image src={gfc} />
					</div>
					<div className={style.nftCollectionsInfo}>
						<h2 className={style.nftCollectionsInfoTitle}>Galaxy Fight Club</h2>
						<div className={style.nftCollectionscreatedBy}>
							Created by <span className="text-[#2081e2]">LeoSathya</span>
						</div>
						<div className={style.nftCollectionsDesc}>
							Meta adventure is an online play-to-ernie game where you play as a
							cyberpunkMeta adventure is an online play-to-ernie game where you
							play as a cyberpunk....
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default nftCollections;
