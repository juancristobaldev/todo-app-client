import { gql } from "@apollo/client";

export const ME = gql`
  query {
    getUser {
      id
      name
      email
      pass
      token
      tasks {
        id
        task
        status
      }
    }
  }
`;

export const GET_TASKS = gql`
  query {
    getTasks {
      id
      task
      userId
      dateCreated
      status
    }
  }
`;
export const GET_TASK = gql`
  query {
    getTask {
      id
      task
      userId
      dateCreated
      status
    }
  }
`;

export const GET_TASKS_BY_DATE = gql`
  query getTasksByDate($date: String!) {
    getTasksByDate(date: $date) {
      task
      id
      status
      dateCreated
      dateAsigned
    }
  }
`;
