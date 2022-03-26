import React from "react";
import theme from "theme";
import { Theme, Link, Span, Text, Box, Section, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section min-height="100vh" padding="0 0 0 0">
			<Override
				slot="SectionContent"
				flex-direction="row"
				flex-wrap="wrap"
				max-width="none"
				width="100%"
				sm-padding="72px 0px 0px 0px"
			/>
			<Box
				display="flex"
				width="40%"
				flex-direction="column"
				justify-content="center"
				align-items="flex-start"
				lg-width="100%"
				lg-align-items="center"
				sm-margin="0px 0px 50px 0px"
				margin="40px 5% 40px 5%"
				lg-padding="24px 60px 24px 60px"
				sm-padding="0px 20px 0px 20px"
				padding="24px 0px 24px 0px"
			>
				<Text
					margin="0px 0px 24px 0px"
					color="--dark"
					font="--headline1"
					lg-text-align="center"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					md-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
				>
					<Span color="--green">
						Welcome To Internet
					</Span>
					{" "}Black Market
				</Text>
				<Text margin="0px 0px 40px 0px" color="--darkL2" font="--lead" lg-text-align="center">
					Ini adalah layanan pemasaran sisi gelap internet, Platform ini bisa anda gunakan untuk memesan pembuatan Link & Website
				</Text>
				<Box
					display="flex"
					sm-flex-direction="column"
					sm-width="100%"
					sm-text-align="center"
					justify-content="flex-start"
					align-items="center"
				>
					<Link
						href="#"
						padding="12px 24px 12px 24px"
						color="--light"
						text-decoration-line="initial"
						font="--lead"
						border-radius="8px"
						margin="0px 16px 0px 0px"
						transition="background-color 0.2s ease-in-out 0s"
						sm-margin="0px 0px 16px 0px"
						sm-text-align="center"
						background="--color-green"
						hover-background="--color-primary"
						hover-transition="background-color 0.2s ease-in-out 0s"
					>
						Order Produk
					</Link>
					<Link
						href="#"
						padding="10px 24px 10px 24px"
						color="--darkL1"
						text-decoration-line="initial"
						font="--lead"
						border-radius="8px"
						margin="0px 16px 0px 0px"
						border-width="2px"
						border-style="solid"
						border-color="--color-darkL1"
						transition="color 0.2s ease-in-out 0s,border 0.2s ease-in-out 0s"
						sm-margin="0px 0px 0px 0px"
						sm-text-align="center"
						hover-background="--color-green"
						lg-margin="0px 0px 0px 0px"
						hover-transition="color 0.2s ease-in-out 0s,border 0.2s ease-in-out 0s"
						hover-color="--primary"
						hover-border-color="--color-primary"
					>
						Cek Plan & harga
					</Link>
				</Box>
			</Box>
			<Box
				display="flex"
				width="50%"
				justify-content="center"
				overflow-y="hidden"
				overflow-x="hidden"
				lg-width="100%"
				background="#FFFFFF url(https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1500&q=80) center center/cover no-repeat scroll padding-box"
				lg-min-height="400px"
				lg-background="#FFFFFF url(https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/bg-green.jpg?v=2021-08-26T00:39:08.141Z) 100% 75%/cover no-repeat scroll padding-box"
				md-background="#FFFFFF url(https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/bg-green.jpg?v=2021-08-26T00:39:08.141Z) 100% 100%/cover no-repeat scroll padding-box"
				sm-background="#FFFFFF url(https://uploads.quarkly.io/623475d75ac830002350a655/images/anonymous-hacker.gif?v=2022-03-18T12:48:23.374Z) 50% 100%/cover no-repeat scroll padding-box"
			/>
		</Section>
		<Section padding="80px 0 80px 0">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				display="flex"
				align-items="center"
				flex-direction="column"
				justify-content="center"
				margin="0px 0px 64px 0px"
				width="100%"
				sm-margin="0px 0px 30px 0px"
				padding="0px 200px 0px 200px"
				lg-padding="0px 0px 0px 0px"
			>
				<Text margin="0px 0px 16px 0px" font="--headline1" text-align="center" sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif">
					Harga & Tempo
				</Text>
				<Text margin="0px 0px 0px 0px" color="--darkL2" text-align="center" font="--lead">
					Berikut adalah desain aplikasi BRImobile, Dengan tampilan desain yg sudah di upgrade ke versi premium, dan memiliki kelebihan dengan tersendiri nya
				</Text>
			</Box>
			<Box
				display="grid"
				flex-wrap="wrap"
				width="100%"
				align-items="center"
				justify-content="center"
				grid-template-columns="repeat(3, 1fr)"
				grid-gap="30px"
				md-grid-template-columns="1fr"
			>
				<Box
					width="100%"
					display="flex"
					padding="7px 7px 40px 7px"
					border-radius="24px"
					align-items="center"
					flex-direction="column"
					border-width="1px"
					border-style="solid"
					border-color="--color-lightD2"
					justify-content="center"
				>
					<Image
						src="https://uploads.quarkly.io/623475d75ac830002350a655/images/dribbble_shot_hd_-_redesign_bca_4x.webp?v=2022-03-18T13:08:52.412Z"
						border-radius="16px"
						margin="0px 0px 32px 0px"
						max-width="100%"
						md-width="100%"
						width="100%"
						height="278px"
						object-fit="cover"
					/>
					<Box
						display="flex"
						flex-direction="column"
						padding="0px 30px 0px 30px"
						align-items="flex-start"
						justify-content="flex-start"
					>
						<Text margin="0px 0px 8px 0px" font="--headline3">
							Link BCAmobile
						</Text>
						<Text margin="0px 0px 16px 0px" text-align="center" font="--lead">
							Rp 300 ribu / bulan
						</Text>
						<Text margin="0px 0px 48px 0px" color="--darkL2" font="--base">
							Produk Family - gratis pemakaian selama 15 hari, Jika jatuh tempo anda di wajibkan untuk melakukan pembayaran
						</Text>
						<Link
							href="#"
							text-decoration-line="initial"
							color="--light"
							font="--lead"
							padding="12px 24px 12px 24px"
							border-radius="8px"
							background="--color-secondary"
							lg-padding="12px 20px 12px 20px"
							transition="background-color 0.2s ease-in-out 0s"
							hover-transition="background-color 0.2s ease-in-out 0s"
							hover-background="--color-orange"
							sm-background="#257931"
						>
							Pilih Produk
						</Link>
					</Box>
				</Box>
				<Box
					width="100%"
					display="flex"
					padding="7px 7px 40px 7px"
					border-radius="24px"
					align-items="center"
					flex-direction="column"
					border-width="1px"
					border-style="solid"
					border-color="--color-lightD2"
					justify-content="center"
					position="relative"
				>
					<Text
						margin="0px 0px 0px 0px"
						font="--base"
						color="#ffffff"
						padding="4px 16px 4px 16px"
						background="--color-green"
						border-radius="50px"
						position="absolute"
						top="24px"
						right="24px"
						bottom="auto"
						left="auto"
					>
						Recomended
					</Text>
					<Image
						src="https://uploads.quarkly.io/623475d75ac830002350a655/images/Langkah-Membuka-Tabungan-BRI-lewat-BRImo.jpg?v=2022-03-18T13:16:03.286Z"
						border-radius="16px"
						margin="0px 0px 32px 0px"
						max-width="100%"
						md-width="100%"
						max-height="278px"
						object-fit="cover"
						width="100%"
					/>
					<Box
						display="flex"
						flex-direction="column"
						padding="0px 30px 0px 30px"
						align-items="flex-start"
						justify-content="flex-start"
					>
						<Text margin="0px 0px 8px 0px" font="--headline3">
							Link BRImo
						</Text>
						<Text margin="0px 0px 16px 0px" text-align="center" font="--lead">
							Rp 500 ribu / bulan
						</Text>
						<Text margin="0px 0px 48px 0px" color="--darkL2" font="--base">
							Berikut produk BRImo. Desain khusus dengan tampilan elegan dan memiliki kelebihan yg sulit di deskripsikan
						</Text>
						<Link
							href="#"
							text-decoration-line="initial"
							color="--dark"
							font="--lead"
							padding="12px 24px 12px 24px"
							border-radius="8px"
							background="--color-secondary"
							lg-padding="12px 20px 12px 20px"
							transition="background-color 0.2s ease-in-out 0s"
							hover-transition="background-color 0.2s ease-in-out 0s"
							hover-background="--color-orange"
						>
							Pilih produk
						</Link>
					</Box>
				</Box>
				<Box
					width="100%"
					display="flex"
					padding="7px 7px 40px 7px"
					border-radius="24px"
					align-items="center"
					flex-direction="column"
					border-width="1px"
					border-style="solid"
					border-color="--color-lightD2"
					justify-content="center"
				>
					<Image
						src="https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
						border-radius="16px"
						margin="0px 0px 32px 0px"
						max-width="100%"
						md-width="100%"
						max-height="278px"
						object-fit="cover"
						width="100%"
					/>
					<Box
						display="flex"
						flex-direction="column"
						padding="0px 30px 0px 30px"
						align-items="flex-start"
						justify-content="flex-start"
					>
						<Text margin="0px 0px 8px 0px" font="--headline3">
							Freelance
						</Text>
						<Text margin="0px 0px 16px 0px" text-align="center" font="--lead">
							Free
						</Text>
						<Text margin="0px 0px 48px 0px" color="--darkL2" font="--base">
							Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at
						</Text>
						<Link
							href="#"
							text-decoration-line="initial"
							color="--dark"
							font="--lead"
							padding="12px 24px 12px 24px"
							border-radius="8px"
							background="--color-secondary"
							lg-padding="12px 20px 12px 20px"
							transition="background-color 0.2s ease-in-out 0s"
							hover-transition="background-color 0.2s ease-in-out 0s"
							hover-background="--color-orange"
						>
							Select plan
						</Link>
					</Box>
				</Box>
			</Box>
		</Section>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"623475d75ac830002350a653"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});