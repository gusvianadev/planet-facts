export type Planet = {
	name: string;
	color: string;
	tabColor: string;
	overview: {
		content: string;
		source: string;
	};
	structure: {
		content: string;
		source: string;
	};
	geology: {
		content: string;
		source: string;
	};
	rotation: string;
	revolution: string;
	radius: string;
	temperature: string;
	images: {
		planet: string;
		internal: string;
		geology: string;
	};
};

export type LayoutProps = {
	planet: Omit<Planet, "overview" | "structure" | "geology"> & {
		content: string;
		source: string;
		type: "overview" | "structure" | "geology";
	};
};
