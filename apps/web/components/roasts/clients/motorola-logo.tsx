import clsx from 'clsx';

const MotorolaLogo = (props: React.ComponentProps<'svg'>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Motorola logo"
      viewBox="0 0 379.661 96"
      {...props}
      className={clsx('h-16 w-40 fill-muted-foreground', props.className)}
    >
      <path d="M37.858 4.827c-5.369.705-11.137 2.603-15.729 5.207C10.504 16.597 2.73 27.715.416 41.076c-.434 2.531-.542 9.6-.199 12.294.633 4.845 1.934 9.202 3.995 13.487 2.188 4.538 4.447 7.774 7.882 11.336 5.713 5.93 12.963 10.142 20.827 12.059 4.086.994 5.623 1.175 10.54 1.175s6.472-.181 10.54-1.175c6.147-1.501 12.565-4.755 17.374-8.75 2.007-1.681 5.333-5.171 6.888-7.25 4.194-5.568 6.997-12.077 8.118-18.748 2.911-17.211-4.321-34.061-18.766-43.733-5.641-3.779-11.914-6.093-18.82-6.96-2.531-.307-8.425-.307-10.938.018zm-.886 32.307c3.471 11.516 6.4 20.936 6.49 20.936.108 0 3.019-9.419 6.49-20.936 3.471-11.498 6.364-21.026 6.418-21.153.108-.181 3.905 12.113 16.398 53.08l.235.759h-1.446c-.994 0-1.464-.072-1.519-.235-.036-.108-.398-1.482-.814-3.019-1.934-7.177-4.556-12.655-7.214-15.024-.56-.506-1.627-1.211-2.35-1.573-1.338-.651-1.392-.669-3.525-.669-2.151 0-2.206.018-3.363.633-1.428.759-3.58 2.856-4.737 4.61-1.031 1.573-2.712 4.701-3.779 6.997-.705 1.537-.814 1.699-.958 1.356-.759-1.79-3.146-6.436-3.887-7.539-1.826-2.748-3.724-4.628-5.623-5.568-.904-.434-1.175-.488-2.983-.47-2.314 0-3.236.289-5.098 1.627-3.363 2.405-6.111 8.172-8.732 18.278l-.199.777H15.33c-1.103 0-1.446-.054-1.392-.235.054-.108 3.779-12.33 8.28-27.119 4.52-14.789 8.262-26.793 8.316-26.667.072.127 2.965 9.654 6.436 21.153zm165.857-1.247c0 10.558.072 17.247.199 18.206.38 3.164 1.772 6.075 4.014 8.425 2.82 2.983 6.093 4.429 10.667 4.701l1.934.127v-7.467h-1.229c-2.278 0-4.158-.705-5.677-2.133-1.067-.994-1.699-2.007-2.151-3.489-.307-1.012-.344-1.772-.344-9.582v-8.479h9.22v-7.412h-9.22v-9.582h-7.412v16.687zm126.554 7.087v23.774h7.412V19.2h-7.412v23.774zM115.055 28.981c-4.809.705-9.202 3.995-11.263 8.479-1.428 3.073-1.374 2.368-1.446 16.579l-.054 12.71h7.431V54.546c0-11.806.018-12.258.362-13.306 1.844-5.478 8.389-7.159 12.529-3.254.542.506 1.193 1.338 1.482 1.844.994 1.844.994 1.79.994 14.843V66.75h7.412V54.492c0-13.722-.036-13.216 1.302-15.223 2.079-3.11 6.129-4.285 9.455-2.73 1.392.651 2.929 2.025 3.58 3.236 1.031 1.88 1.031 1.953 1.031 14.988v11.986h7.249l-.054-12.981-.054-12.963-.434-1.266c-1.934-5.749-6.545-9.745-12.221-10.576-4.61-.651-9.311.832-12.673 4.014l-.976.922-1.175-1.103c-3.272-3.073-7.882-4.484-12.475-3.815zm61.288 0c-9.835 1.41-17.012 10.124-16.488 19.941.271 4.899 2.224 9.311 5.623 12.692 1.736 1.736 3.182 2.73 5.424 3.779 9.962 4.646 21.821.018 25.962-10.16 1.555-3.851 1.808-8.353.705-12.366-.452-1.645-1.663-4.249-2.694-5.785-1.012-1.482-3.381-3.851-4.863-4.845-4.068-2.748-9.021-3.923-13.668-3.254zm6.292 7.738c2.025.723 3.254 1.501 4.827 3.092 2.423 2.405 3.435 4.845 3.435 8.226 0 2.007-.325 3.327-1.302 5.333-1.482 3.055-4.592 5.46-8.045 6.219-5.134 1.139-10.594-1.482-12.981-6.219-.994-1.971-1.247-3.092-1.247-5.424 0-1.808.072-2.278.506-3.525 1.392-4.05 4.502-6.924 8.588-7.955 1.464-.38 4.845-.235 6.219.253zm55.991-7.738c-1.808.235-4.176.976-5.948 1.862-7.141 3.598-11.173 10.884-10.468 18.965.669 7.846 6.111 14.445 13.776 16.651 7.991 2.314 16.723-.868 21.315-7.792 3.797-5.713 4.249-13.162 1.157-19.308-1.772-3.544-5.08-6.816-8.75-8.66-3.092-1.537-7.34-2.206-11.082-1.718zm6.472 7.846c.723.253 1.627.651 1.989.868 3.76 2.151 6.038 6.038 6.038 10.341 0 3.29-1.067 5.84-3.471 8.244-1.266 1.266-1.844 1.699-3.11 2.314-4.249 2.061-8.714 1.591-12.565-1.32-2.061-1.573-3.724-4.267-4.285-7.015-.344-1.699-.362-2.513-.018-4.375.795-4.484 4.375-8.262 8.931-9.419 1.645-.434 4.845-.253 6.49.362zm32.344-7.756c-5.948 1.067-10.739 5.749-11.95 11.679-.253 1.193-.289 3.182-.289 13.704v12.294h7.232V55.304c0-7.051.072-11.878.199-12.583a7.721 7.721 0 0 1 5.189-6.147c.904-.307 1.555-.38 3.471-.38h2.35v-7.412l-2.386.018c-1.32 0-3.037.127-3.815.271zm25.365-.108c-4.954.705-9.654 3.453-12.673 7.467-6.328 8.371-4.701 20.52 3.598 26.793 7.557 5.713 18.043 5.207 24.877-1.193 2.368-2.206 4.014-4.791 5.062-7.937 1.916-5.785 1.031-12.077-2.441-17.085-1.229-1.79-3.887-4.285-5.749-5.406-1.681-1.012-4.104-1.971-6.02-2.386-1.609-.344-5.062-.47-6.653-.253zm5.496 7.593c2.224.56 3.779 1.464 5.532 3.236 1.555 1.573 2.26 2.694 2.983 4.809.47 1.338.579 4.574.199 6.056-1.121 4.502-4.719 7.991-9.22 8.967-5.08 1.085-10.522-1.573-12.854-6.31-1.049-2.097-1.428-3.851-1.302-5.912a12.016 12.016 0 0 1 9.148-10.938c1.519-.362 3.887-.325 5.514.09zm50.368-7.684c-.145.036-.886.163-1.627.271-5.713.94-10.974 4.827-13.614 10.034-4.231 8.407-2.025 18.386 5.333 24.081 6.545 5.044 15.964 5.261 22.744.524l1.175-.832.054 1.898.054 1.898h6.87l-.054-11.082c-.054-10.703-.072-11.119-.452-12.456-1.591-5.623-5.062-9.889-10.088-12.366-2.658-1.302-4.918-1.862-7.864-1.971-1.247-.036-2.386-.036-2.531 0zm5.568 7.919c4.682 1.645 7.81 5.749 8.118 10.612.163 2.694-.723 5.532-2.477 7.846-2.043 2.712-5.858 4.61-9.275 4.628-4.357.018-8.696-2.658-10.576-6.508-.976-1.989-1.302-3.327-1.302-5.333 0-3.381 1.012-5.821 3.435-8.244 1.736-1.736 3.272-2.658 5.46-3.236 1.898-.524 4.791-.416 6.617.235z" />
    </svg>
  );
};

export default MotorolaLogo;
