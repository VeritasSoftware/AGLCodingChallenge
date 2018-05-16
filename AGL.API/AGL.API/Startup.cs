using AGL.Application;
using AGL.Repository;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Swashbuckle.AspNetCore.Swagger;

namespace AGL.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //Get AGL section from AppSettings
            var aglSection = this.Configuration.GetSection("AGL").Get<AGL>();
            //Get API Url
            var apiUrl = aglSection.ApiUrl;

            //add dependency injection
            services.AddScoped<IPetsRepository, PetsRepository>(x => new PetsRepository { Url = apiUrl });
            services.AddScoped<IPetsManager, PetsManager>();

            //Add CORS support
            services.AddCors();

            services.AddMvc();

            // Register the Swagger generator, defining 1 or more Swagger documents
            services.AddSwaggerGen(c =>
            {
                c.DescribeAllEnumsAsStrings();

                c.SwaggerDoc("v1", new Info { Title = "AGL API", Version = "v1" });
            });            
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            // Enable middleware to serve generated Swagger as a JSON endpoint.
            app.UseSwagger();

            // Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.), 
            // specifying the Swagger JSON endpoint.
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "AGL API V1");
            });

            //Add CORS support
            app.UseCors(x =>
            {
                x.AllowAnyOrigin()
                 .AllowAnyHeader()
                 .AllowAnyMethod();
            });

            app.UseMvc();
        }
    }
}
