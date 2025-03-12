import ComponentPreview from "@/component/layout/ComponentPreview";
import Container from "@/component/layout/Container";
import { getMyComponent } from "@/lib/actions/component.action";
import { ComponentType } from "@/lib/utils/types";
import React from "react";

async function ProductPage() {
  const data = await getMyComponent();

  return (
    <Container className="flex">
      <div className="flex-1">
        {data?.results?.map((data: ComponentType) => {
          return <ComponentPreview data={data} key={data.id} />;
        })}
      </div>
      <div className="flex-none w-[10%] md:flex hidden"></div>
    </Container>
  );
}

export default ProductPage;
