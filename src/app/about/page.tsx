import { PageSection } from "@/ui/UtilComponents";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center w-full h-max px-auto my-4  ">
      <div className="w-4/5 bg-white flex flex-col items-center">
        <PageSection title="About Us">
          <div className="m-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In,
            dolorum. Nostrum cumque vero dolor iusto, doloremque totam alias
            dignissimos. Perspiciatis?
          </div>
        </PageSection>
      </div>
      <div className="flex justify-center w-full">
        <div className="flex flex-wrap md:flex-nowrap justify-evenly gap-4 w-4/5 m-4">
          <PageSection title="Lorem Ipsum">
            <div className="m-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
              laboriosam nihil enim, a corporis id ea quam debitis sapiente
              illo, sint eum cum. Impedit, quisquam recusandae molestias aut
              repellat sit.
            </div>
          </PageSection>
          <PageSection title="Lorem Ipsum">
            <div className="m-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
              aliquid ea voluptates iste amet porro iure neque, culpa deserunt
              a? Delectus magnam officiis laborum? Dolorum assumenda placeat rem
              consequatur. Cupiditate iusto deleniti tenetur impedit quo,
              similique corporis voluptatem molestias. Quis iusto esse placeat
              repudiandae ab molestias velit modi dignissimos, repellat illo
              rerum. Modi, voluptas. Sequi reprehenderit, qui suscipit cum rem
              corrupti voluptas illo porro voluptatibus iusto fugiat voluptates
              maiores. Voluptate?
            </div>
          </PageSection>
          <PageSection title="Lorem Ipsum">
            <div className="m-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              aperiam optio assumenda nam distinctio quaerat laborum facere
              quibusdam temporibus, corrupti consequuntur ullam accusamus
              exercitationem repellendus tempora perferendis eveniet quasi porro
              impedit consequatur obcaecati nostrum, alias ex ipsa! Cum, quasi
              officiis molestiae, necessitatibus architecto neque aliquam
              adipisci magnam illum maiores voluptatem.
            </div>
          </PageSection>
        </div>
      </div>
    </div>
  );
}
